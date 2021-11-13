import React, { FC, ReactNode } from 'react'
import { Box, Text } from 'grommet'
import { Folder as FolderIcon } from 'grommet-icons'
import ResourceList from '../../../components/ResourceList'

type Folder = {
  id: number
  name: string
  count: number
}

interface Props {
  folderList: Folder[]
  isLoading: boolean
  onSelectFolder: (id: number) => void
}

const FoldersUI: FC<Props> = ({
  folderList,
  isLoading,
  onSelectFolder,
}: Props) => {
  const renderFolders = (folders: Folder[]): ReactNode => {
    const items = folders.map(({ id, name, count }) => ({
      id,
      title: (
        <Box direction="row" gap="small" fill>
          <Box fill>
            <Text truncate={true}>{name}</Text>
          </Box>
          <Text>{count}</Text>
        </Box>
      ),
      icon: <FolderIcon size="large" />,
    }))

    return (
      <ResourceList
        items={items}
        shouldShowPlaceholders={isLoading}
        onSelectItem={onSelectFolder}
      />
    )
  }

  return (
    <Box fill pad="medium" align="center">
      <Box margin={{ top: 'medium' }} fill>
        {renderFolders(folderList)}
      </Box>
    </Box>
  )
}

export default FoldersUI
