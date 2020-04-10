import storage from '../storage'

export const getAccessToken = (): string | undefined =>
  storage.get('accessToken')
