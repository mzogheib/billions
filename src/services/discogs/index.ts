import axios from 'axios'

const baseUrl = 'https://api.discogs.com'

export type DiscogsSearchResult = {
  id: number
  title: string
  type: string
  thumb: string
}

type SearchResponse = {
  status: number
  statusText: string
  data: {
    results: DiscogsSearchResult[]
  }
}

type SearchParams = {
  query: string
}

interface Search {
  (params: SearchParams): Promise<SearchResponse>
}

export const search: Search = async ({ query }) => {
  const token = process.env.REACT_APP_DISCOGS_TOKEN as string

  // TODO: handle errors
  return await axios.request({
    method: 'GET',
    url: `${baseUrl}/database/search`,
    headers: {
      Authorization: `Discogs token=${token}`,
    },
    params: { q: query },
  })
}
