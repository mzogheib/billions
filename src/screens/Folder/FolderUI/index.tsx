import React, { FC, ReactNode } from 'react'
import { Box, Text } from 'grommet'
import { Folder as FolderIcon } from 'grommet-icons'
import ResourceList from '../../../components/ResourceList'
import { Folder } from '../../../services/discogs'

interface Props {
  collectionFolderList?: Folder[]
}

const CollectionFolderUI: FC<Props> = ({ collectionFolderList }: Props) => {
  const renderCollection = (folders?: Folder[]): ReactNode => {
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

    return <ResourceList items={items} />
  }

  return (
    <Box fill pad="medium" align="center">
      <Box margin={{ top: 'medium' }} fill>
        {renderCollection(collectionFolderList)}
      </Box>
    </Box>
  )
}

export default CollectionFolderUI
