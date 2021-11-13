import React, { FC, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

import { fetchCollection, Folder } from '../../services/discogs'
import FoldersUI from './FoldersUI'

interface HandleFetchCollection {
  (): Promise<void>
}

const Folders: FC = () => {
  const { push } = useHistory()

  const [folders, setFolders] = useState<Folder[]>([])
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

  return (
    <FoldersUI
      folderList={folders}
      isLoading={isLoading}
      onSelectFolder={handleSelectFolder}
    />
  )
}

export default Folders
