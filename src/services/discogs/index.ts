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

// SEARCH

type SearchResponse = {
  status: number
  statusText: string
  data: {
    results: DiscogsSearchResult[]
  }
}

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

type FetchArtistResponse = {
  status: number
  statusText: string
  data: FetchArtistResponseData
}

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

type FetchMasterResponse = {
  status: number
  statusText: string
  data: FetchMasterResponseData
}

type FetchMasterParams = {
  id: number
}

interface FetchResponse {
  (params: FetchMasterParams): Promise<FetchMasterResponse>
}

export const fetchMaster: FetchResponse = async ({ id }) => {
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
