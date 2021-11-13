import { discogsRequest } from './core'

export type Folder = {
  id: number
  name: string
  count: number
}

export type FetchCollectionResponseData = {
  folders?: Folder[]
}

type FetchCollectionParams = {
  username: string
}

interface FetchCollection {
  (params: FetchCollectionParams): Promise<FetchCollectionResponseData>
}

export const fetchCollection: FetchCollection = ({ username }) =>
  discogsRequest({ endpoint: `/users/${username}/collection/folders` })
