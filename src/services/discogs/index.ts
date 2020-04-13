import axios from 'axios'

const baseUrl = 'https://api.discogs.com'

type SearchResponse = {
  status: number
  statusText: string
  data: {
    results: { title: string; type: string }[]
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

  return await axios.request({
    method: 'GET',
    url: `${baseUrl}/database/search`,
    headers: {
      Authorization: `Discogs token=${token}`,
    },
    params: { q: query },
  })
}
