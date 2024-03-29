import { makeQueryParams } from '../../utils/routerUtils'

type DiscogsRequest = {
  endpoint: string
  params?: Record<string, string>
}

export const discogsRequest = async <T>({
  endpoint,
  params,
}: DiscogsRequest): Promise<T> => {
  const token = process.env.REACT_APP_DISCOGS_TOKEN as string
  const baseUrl = 'https://api.discogs.com'

  const search = params && Object.keys(params).length && makeQueryParams(params)
  const searchString = search ? `?${search.toString()}` : ''
  const url = `${baseUrl}${endpoint}${searchString}`

  const fetchOptions = {
    headers: new Headers({ Authorization: `Discogs token=${token}` }),
  }

  const data = await fetch(url, fetchOptions)

  if (data.ok) {
    return data.json()
  } else {
    throw data.json()
  }
}
