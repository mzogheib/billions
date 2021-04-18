import React, { FC, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Box } from 'grommet'

import {
  fetchCollection,
  FetchCollectionResponseData,
} from '../../services/discogs'
import FoldersUI from './FoldersUI'

type HandleFetchCollectionParams = {
  username: string
}

interface HandleFetchCollection {
  (params: HandleFetchCollectionParams): Promise<void>
}

const Folders: FC = () => {
  const { push } = useHistory()

  const [
    collection,
    setCollection,
  ] = useState<FetchCollectionResponseData | null>(null)
  const [isLoading, setLoading] = useState(false)

  const handleFetchCollection: HandleFetchCollection = async ({ username }) => {
    setLoading(true)

    const response = await fetchCollection({ username })
    const collectionResponse = response.data

    setCollection(collectionResponse)
    setLoading(false)
  }

  const handleSelectFolder = (folderId: number): void => {
    push(`/folders/${folderId}`)
  }

  useEffect(() => {
    handleFetchCollection({ username: 'mzogheib' })
  }, [])

  if (isLoading) {
    return (
      <Box fill pad="medium">
        Loading...
      </Box>
    )
  }

  if (!collection) {
    return (
      <Box fill pad="medium">
        No collection found
      </Box>
    )
  }

  return (
    <FoldersUI
      folderList={collection.folders}
      onSelectFolder={handleSelectFolder}
    />
  )
}

export default Folders
