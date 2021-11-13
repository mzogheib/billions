import { discogsRequest } from './core'

export enum DiscogsSearchType {
  artist = 'artist',
  master = 'master',
}

export type DiscogsSearchResult = {
  id: number
  title: string
  type: string
  thumb: string
}

type SearchResponseData = {
  results: DiscogsSearchResult[]
}

type SearchParams = {
  query: string
  type: DiscogsSearchType
}

interface Search {
  (params: SearchParams): Promise<SearchResponseData>
}

export const search: Search = ({ query, type }) =>
  discogsRequest({ endpoint: '/database/search', params: { q: query, type } })
