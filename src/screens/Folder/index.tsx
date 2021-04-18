import React, { FC, useEffect, useState } from 'react'
import { Box } from 'grommet'
import { useParams } from 'react-router-dom'

import {
  fetchCollectionFolderReleases,
  FetchCollectionFolderReleasesResponseData,
} from '../../services/discogs'
import CollectionFolderUI from './FolderUI'

type HandleFetchCollectionFolderParams = {
  username: string
  folderId: number
}

interface HandleFetchCollectionFolder {
  (params: HandleFetchCollectionFolderParams): Promise<void>
}

const Folder: FC = () => {
  console.log('folder')

  const { folderId } = useParams<{ folderId: string }>()

  const [
    collectionFolder,
    setCollectionFolder,
  ] = useState<FetchCollectionFolderReleasesResponseData | null>(null)
  const [isLoading, setLoading] = useState(false)

  const handleFetchCollectionFolder: HandleFetchCollectionFolder = async ({
    username,
    folderId,
  }) => {
    setLoading(true)

    const response = await fetchCollectionFolderReleases({ username, folderId })
    const collectionFolderResponse = response.data

    setCollectionFolder(collectionFolderResponse)
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

  if (isLoading) {
    return (
      <Box fill pad="medium">
        Loading...
      </Box>
    )
  }

  if (!collectionFolder) {
    return (
      <Box fill pad="medium">
        No collection found
      </Box>
    )
  }

  return <CollectionFolderUI collectionFolderList={[]} />
}

export default Folder
