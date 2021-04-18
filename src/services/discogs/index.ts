import axios from 'axios'

const baseUrl = 'https://api.discogs.com'

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

export const search: Search = async ({ query, type }) => {
  const token = process.env.REACT_APP_DISCOGS_TOKEN as string

  // TODO: handle errors
  return await axios.request({
    method: 'GET',
    url: `${baseUrl}/database/search`,
    headers: {
      Authorization: `Discogs token=${token}`,
    },
    params: { q: query, type },
  })
}

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

export const fetchArtist: FetchArtist = async ({ id }) => {
  const token = process.env.REACT_APP_DISCOGS_TOKEN as string

  // TODO: handle errors
  return await axios.request({
    method: 'GET',
    url: `${baseUrl}/artists/${id}`,
    headers: {
      Authorization: `Discogs token=${token}`,
    },
  })
}

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

export const fetchMaster: FetchMaster = async ({ id }) => {
  const token = process.env.REACT_APP_DISCOGS_TOKEN as string

  // TODO: handle errors
  return await axios.request({
    method: 'GET',
    url: `${baseUrl}/masters/${id}`,
    headers: {
      Authorization: `Discogs token=${token}`,
    },
  })
}

// COLLECTION

export type FetchCollectionResponseData = {
  folders?: {
    id: number
    name: string
    count: number
  }[]
}

type FetchCollectionResponse = FetchResponse<FetchCollectionResponseData>

type FetchCollectionParams = {
  username: string
}

interface FetchCollection {
  (params: FetchCollectionParams): Promise<FetchCollectionResponse>
}

export const fetchCollection: FetchCollection = async ({ username }) => {
  const token = process.env.REACT_APP_DISCOGS_TOKEN as string

  // TODO: handle errors
  return await axios.request({
    method: 'GET',
    url: `${baseUrl}/users/${username}/collection/folders`,
    headers: {
      Authorization: `Discogs token=${token}`,
    },
  })
}

// COLLECTION FOLDER RELEASES

export type FetchCollectionFolderReleasesResponseData = {
  folders?: {
    id: number
    name: string
    count: number
  }[]
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
}) => {
  const token = process.env.REACT_APP_DISCOGS_TOKEN as string

  // TODO: handle errors
  return await axios.request({
    method: 'GET',
    url: `${baseUrl}/users/${username}/collection/folders/${folderId}/releases`,
    headers: {
      Authorization: `Discogs token=${token}`,
    },
  })
}
