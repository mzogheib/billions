import { discogsRequest } from './core'

export type FetchMasterResponseData = {
  title: string
  year?: number
  artists?: {
    name: string
    id: number
  }[]
  images?: {
    uri: string
  }[]
  tracklist?: {
    position: string
    title: string
    duration: string
  }[]
}

type FetchMasterParams = {
  id: number
}

interface FetchMaster {
  (params: FetchMasterParams): Promise<FetchMasterResponseData>
}

export const fetchMaster: FetchMaster = ({ id }) =>
  discogsRequest({ endpoint: `/masters/${id}` })
