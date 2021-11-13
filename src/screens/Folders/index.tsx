import React, { FC, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Box } from 'grommet'

import { fetchCollection, Folder } from '../../services/discogs'
import FoldersUI from './FoldersUI'

interface HandleFetchCollection {
  (): Promise<void>
}

const Folders: FC = () => {
  const { push } = useHistory()

  const [folders, setFolders] = useState<Folder[] | undefined>(undefined)
  const [isLoading, setLoading] = useState(false)

  const handleFetchCollection: HandleFetchCollection = async () => {
    setLoading(true)

    const { folders } = await fetchCollection()

    setFolders(folders)
    setLoading(false)
  }

  const handleSelectFolder = (folderId: number): void => {
    push(`/folders/${folderId}`)
  }

  useEffect(() => {
    handleFetchCollection()
  }, [])

  if (isLoading) {
    return (
      <Box fill pad="medium">
        Loading...
      </Box>
    )
  }

  if (!folders || !folders.length) {
    return (
      <Box fill pad="medium">
        No collection found
      </Box>
    )
  }

  return <FoldersUI folderList={folders} onSelectFolder={handleSelectFolder} />
}

export default Folders
