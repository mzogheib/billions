import { discogsRequest } from './core'

export type FetchArtistResponseData = {
  name: string
  profile?: string
  images?: {
    uri: string
  }[]
  members?: {}[]
  urls?: string[]
}

type FetchArtistParams = {
  id: number
}

interface FetchArtist {
  (params: FetchArtistParams): Promise<FetchArtistResponseData>
}

export const fetchArtist: FetchArtist = ({ id }) =>
  discogsRequest({ endpoint: `/artists/${id}` })
