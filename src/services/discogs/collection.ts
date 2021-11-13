import { discogsRequest } from './core'

const username = process.env.REACT_APP_USERNAME as string

export type Folder = {
  id: number
  name: string
  count: number
}

export type FetchCollectionResponseData = {
  folders?: Folder[]
}

interface FetchCollection {
  (): Promise<FetchCollectionResponseData>
}

export const fetchCollection: FetchCollection = () =>
  discogsRequest({ endpoint: `/users/${username}/collection/folders` })
