import React, { FC, useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'

import {
  fetchCollectionFolderReleases,
  CollectionFolderRelease,
} from '../../services/discogs'
import FolderUI from './FolderUI'

type HandleFetchCollectionFolderParams = {
  username: string
  folderId: number
}

interface HandleFetchCollectionFolder {
  (params: HandleFetchCollectionFolderParams): Promise<void>
}

const Folder: FC = () => {
  const { folderId } = useParams<{ folderId: string }>()
  const { push } = useHistory()

  const [folderReleases, setFolderReleases] = useState<
    CollectionFolderRelease[]
  >([])
  const [isLoading, setLoading] = useState(false)

  const handleFetchCollectionFolder: HandleFetchCollectionFolder = async ({
    username,
    folderId,
  }) => {
    setLoading(true)

    const response = await fetchCollectionFolderReleases({
      username,
      folderId,
    })
    const releasesResponse = response.data.releases

    setFolderReleases(releasesResponse)
    setLoading(false)
  }

  useEffect(() => {
    const folderIdNum = Number(folderId)
    if (folderIdNum !== null && !Number.isNaN(folderIdNum)) {
      handleFetchCollectionFolder({
        username: 'mzogheib',
        folderId: folderIdNum,
      })
    }
  }, [folderId])

  const handleSelectRelease = (id: number): void => {
    push(`/releases/${id}`)
  }

  return (
    <FolderUI
      releasesList={folderReleases}
      onSelectRelease={handleSelectRelease}
      isLoading={isLoading}
    />
  )
}

export default Folder
