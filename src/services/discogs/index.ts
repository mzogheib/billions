type DiscogsRequest = {
  endpoint: string
  params?: Record<string, string>
}

const discogsRequest = async <T>({
  endpoint,
  params,
}: DiscogsRequest): Promise<T> => {
  const token = process.env.REACT_APP_DISCOGS_TOKEN as string
  const baseUrl = 'https://api.discogs.com'

  const search =
    params && Object.keys(params).length && new URLSearchParams(params)
  const searchString = search ? `?${search.toString()}` : undefined
  const url = `${baseUrl}${endpoint}${searchString}`

  const fetchOptions = {
    headers: new Headers({ Authorization: `Discogs token=${token}` }),
  }

  const data = await fetch(url, fetchOptions)

  if (data.ok) {
    return data.json()
  } else {
    throw data.json()
  }
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

// SEARCH

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

type FetchArtistParams = {
  id: number
}

interface FetchArtist {
  (params: FetchArtistParams): Promise<FetchArtistResponseData>
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

type FetchMasterParams = {
  id: number
}

interface FetchMaster {
  (params: FetchMasterParams): Promise<FetchMasterResponseData>
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

type FetchCollectionParams = {
  username: string
}

interface FetchCollection {
  (params: FetchCollectionParams): Promise<FetchCollectionResponseData>
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

type FetchCollectionFolderReleasesParams = {
  username: string
  folderId: number
}

interface FetchCollectionFolderReleases {
  (params: FetchCollectionFolderReleasesParams): Promise<
    FetchCollectionFolderReleasesResponseData
  >
}

export const fetchCollectionFolderReleases: FetchCollectionFolderReleases = async ({
  username,
  folderId,
}) =>
  discogsRequest({
    endpoint: `/users/${username}/collection/folders/${folderId}/releases`,
  })
