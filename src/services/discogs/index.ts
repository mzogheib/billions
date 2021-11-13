import axios, { Method } from 'axios'

const baseUrl = 'https://api.discogs.com'

type DiscogsRequest = {
  endpoint: string
  method?: Method
  params?: Record<string, string>
}

const discogsRequest = <T>({
  endpoint,
  method = 'GET',
  params,
}: DiscogsRequest): Promise<T> => {
  const token = process.env.REACT_APP_DISCOGS_TOKEN as string

  // TODO: handle errors
  return axios.request({
    method,
    url: `${baseUrl}${endpoint}`,
    headers: {
      Authorization: `Discogs token=${token}`,
    },
    params,
  })
}

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

type FetchResponse<ResponseData> = {
  status: number
  statusText: string
  data: ResponseData
}

// SEARCH

type SearchResponseData = {
  results: DiscogsSearchResult[]
}

type SearchResponse = FetchResponse<SearchResponseData>

type SearchParams = {
  query: string
  type: DiscogsSearchType
}

interface Search {
  (params: SearchParams): Promise<SearchResponse>
}

export const search: Search = ({ query, type }) =>
  discogsRequest({
    endpoint: '/database/search',
    params: { q: query, type },
  })

// ARTIST

export type FetchArtistResponseData = {
  name: string
  profile?: string
  images?: {
    uri: string
  }[]
  members?: {}[]
  urls?: string[]
}

type FetchArtistResponse = FetchResponse<FetchArtistResponseData>

type FetchArtistParams = {
  id: number
}

interface FetchArtist {
  (params: FetchArtistParams): Promise<FetchArtistResponse>
}

export const fetchArtist: FetchArtist = ({ id }) =>
  discogsRequest({
    endpoint: `/artists/${id}`,
  })

// MASTER

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

type FetchMasterResponse = FetchResponse<FetchMasterResponseData>

type FetchMasterParams = {
  id: number
}

interface FetchMaster {
  (params: FetchMasterParams): Promise<FetchMasterResponse>
}

export const fetchMaster: FetchMaster = ({ id }) =>
  discogsRequest({
    endpoint: `/masters/${id}`,
  })

// COLLECTION

export type Folder = {
  id: number
  name: string
  count: number
}

export type FetchCollectionResponseData = {
  folders?: Folder[]
}

type FetchCollectionResponse = FetchResponse<FetchCollectionResponseData>

type FetchCollectionParams = {
  username: string
}

interface FetchCollection {
  (params: FetchCollectionParams): Promise<FetchCollectionResponse>
}

export const fetchCollection: FetchCollection = ({ username }) =>
  discogsRequest({
    endpoint: `/users/${username}/collection/folders`,
  })

// COLLECTION FOLDER RELEASES

export type CollectionFolderRelease = {
  instance_id: number
  date_added: string
  basic_information: {
    master_id: number
    cover_image: string
    year: number
    title: string
    artists: {
      id: number
      name: string
    }[]
  }
}

export type FetchCollectionFolderReleasesResponseData = {
  releases: CollectionFolderRelease[]
}

type FetchCollectionFolderReleasesResponse = FetchResponse<
  FetchCollectionFolderReleasesResponseData
>

type FetchCollectionFolderReleasesParams = {
  username: string
  folderId: number
}

interface FetchCollectionFolderReleases {
  (params: FetchCollectionFolderReleasesParams): Promise<
    FetchCollectionFolderReleasesResponse
  >
}

export const fetchCollectionFolderReleases: FetchCollectionFolderReleases = async ({
  username,
  folderId,
}) =>
  discogsRequest({
    endpoint: `/users/${username}/collection/folders/${folderId}/releases`,
  })
