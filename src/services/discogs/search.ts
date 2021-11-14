import { discogsRequest } from './core'

export enum SearchType {
  artist = 'artist',
  master = 'master',
}

export type SearchResult = {
  id: number
  title: string
  type: string
  thumb: string
}

type SearchResponseData = {
  results: SearchResult[]
}

type SearchParams = {
  query: string
  type: SearchType
}

interface Search {
  (params: SearchParams): Promise<SearchResponseData>
}

export const search: Search = ({ query, type }) =>
  discogsRequest({ endpoint: '/database/search', params: { q: query, type } })
