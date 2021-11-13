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
  folderList?: Folder[]
  onSelectFolder: (id: number) => void
}

const FoldersUI: FC<Props> = ({ folderList, onSelectFolder }: Props) => {
  const renderFolders = (folders?: Folder[]): ReactNode => {
    if (!(folders && folders.length)) {
      return null
    }

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

    return <ResourceList items={items} onSelectItem={onSelectFolder} />
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
