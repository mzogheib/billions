import { discogsRequest } from './core'

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
