import storage from '../storage'
import { makeRandomString, encode, decode } from '../../utils/misc'
import { makeQueryParams } from '../../utils/routerUtils'
import { FnStringVoid, FnEmptyVoid } from '../../utils/typescript'

export type GeniusOAuthResponse = {
  access_token: string
  token_type: string
  state: string
}

declare global {
  interface Window {
    geeniousOnOAuthResponse: (response: GeniusOAuthResponse) => void
  }
}

const setAccessToken = (token: string): void =>
  storage.set('accessToken', token)

const getAccessToken = (): string | undefined => storage.get('accessToken')

export const hasAccessToken = (): boolean => !!getAccessToken()

const makeAuthUrl = (token: string): string => {
  const baseUrl = 'https://api.genius.com/oauth/authorize'

  const params = {
    ['client_id']:
      'M0kVySiz7a5uFc6m7-1uapKvDZsLg7EGusZ9tFzSbu0mbFwG_IyYxj6izrpoEcY5',
    ['redirect_uri']: 'http://localhost:3000/oauth',
    ['response_type']: 'token',
    scope: 'me',
    state: encode({ token }),
  }

  return `${baseUrl}?${makeQueryParams(params)}`
}

const setStateToken = (token: string): void =>
  storage.set('oauth-state-token', token)

const getStateToken = (): string | undefined => storage.get('oauth-state-token')

const deleteStateToken = (): void => storage.delete('oauth-state-token')

const isValidStateToken = (token: string): boolean => {
  const storedToken = getStateToken()
  return !!storedToken && !!token && storedToken === token
}

interface OpenAuthPage {
  onSuccess: FnEmptyVoid
  onError: FnStringVoid
}

// This is called by the OPENER
export const openAuthPage = ({ onSuccess, onError }: OpenAuthPage): void => {
  // 1. Create the state token that will be checked later
  const stateToken = makeRandomString()
  setStateToken(stateToken)

  // 2. Open a new window for the user to authorise this app
  window.open(makeAuthUrl(stateToken))

  // 3. Create the callback that the newly opened window will call on
  // successful authorisation
  window.geeniousOnOAuthResponse = (response): void => {
    const handleError = (message: string): void => {
      onError(message)
      deleteStateToken()
    }

    const isValidResponse =
      response && response.access_token && response.token_type && response.state
    if (!isValidResponse) {
      handleError('Unknown response.')
      return
    }

    let decodedState

    try {
      decodedState = decode(response.state)
    } catch (e) {
      handleError('Unknown response.')
      return
    }

    if (!isValidStateToken(decodedState.token as string)) {
      handleError('Could not authorise Genius.')
      return
    }

    onSuccess()
    deleteStateToken()
    setAccessToken(response.access_token)
  }
}

// This is called by the OPENED
export const onOAuthResponse = (
  response: GeniusOAuthResponse,
  onError: FnStringVoid
): void => {
  const handleError = (message: string): void => {
    onError(message)
    deleteStateToken()
  }

  // Perhaps the opener was closed for some reason
  if (!window.opener) {
    handleError('Could not authorise Genius.')
    return
  }

  // This is an edge case. Fail silently until there's a need for a better solution
  if (!window.opener.geeniousOnOAuthResponse) {
    handleError('Could not authorise Genius.')
    window.close()
    return
  }

  window.opener.geeniousOnOAuthResponse(response)
  delete window.opener.geeniusOnOAuthResponse
  window.close()
}
