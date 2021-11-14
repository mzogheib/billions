import React, { FC, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { fetchCollection, Folder } from '../../services/discogs'
import FoldersUI from './FoldersUI'

interface HandleFetchCollection {
  (): Promise<void>
}

const Folders: FC = () => {
  const navigate = useNavigate()

  const [folders, setFolders] = useState<Folder[]>([])
  const [isLoading, setLoading] = useState(false)

  const handleFetchCollection: HandleFetchCollection = async () => {
    setLoading(true)

    const { folders } = await fetchCollection()

    setFolders(folders)
    setLoading(false)
  }

  const handleSelectFolder = (folderId: number): void => {
    navigate(`/folders/${folderId}`)
  }

  useEffect(() => {
    handleFetchCollection()
  }, [])

  return (
    <FoldersUI
      folders={folders}
      isLoading={isLoading}
      onSelectFolder={handleSelectFolder}
    />
  )
}

export default Folders
