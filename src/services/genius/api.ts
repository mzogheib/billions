import axios from 'axios'

import { getAccessToken } from './auth'
import { SimpleKeyValue } from '../../utils/typescript'

const baseUrl = 'https://api.genius.com'

interface AddAccessTokenToParams {
  (params: SimpleKeyValue): SimpleKeyValue
}

const addAccessTokenToParams: AddAccessTokenToParams = params => {
  // TODO: this is a hack. Come up with a safer solution that ensures this will
  // never be undefined
  const accessToken = getAccessToken() || ''

  return {
    /* eslint-disable @typescript-eslint/camelcase */
    access_token: accessToken,
    /* eslint-enable @typescript-eslint/camelcase */
    ...params,
  }
}

type SearchResponse = {
  meta: {
    status: number
    message?: string
  }
  response: {
    hits: { foo: string }[]
  }
}

type SearchParams = {
  query: string
}

interface Search {
  (params: SearchParams): Promise<SearchResponse>
}

export const search: Search = async ({ query }) =>
  await axios.request({
    method: 'GET',
    url: `${baseUrl}/search`,
    params: addAccessTokenToParams({ q: query }),
  })
