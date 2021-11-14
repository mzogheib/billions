import React, { FC, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

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
  const { folderId } = useParams()
  const navigate = useNavigate()

  const [folderReleases, setFolderReleases] = useState<
    CollectionFolderRelease[]
  >([])
  const [isLoading, setLoading] = useState(false)

  const handleFetchCollectionFolder: HandleFetchCollectionFolder = async ({
    username,
    folderId,
  }) => {
    setLoading(true)

    const { releases } = await fetchCollectionFolderReleases({
      username,
      folderId,
    })

    setFolderReleases(releases)
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
    navigate(`/releases/${id}`)
  }

  return (
    <FolderUI
      releases={folderReleases}
      onSelectRelease={handleSelectRelease}
      isLoading={isLoading}
    />
  )
}

export default Folder
