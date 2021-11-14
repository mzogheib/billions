import React, { FC } from 'react'
import { Box, Text } from 'grommet'
import { Disc as DiscIcon } from 'grommet-icons'
import ResourceList from '../../../components/ResourceList'
import { CollectionFolderRelease } from '../../../services/discogs'

interface Props {
  releases: CollectionFolderRelease[]
  isLoading?: boolean
  onSelectRelease: (id: number) => void
}

const CollectionFolderUI: FC<Props> = ({
  releases,
  isLoading,
  onSelectRelease,
}: Props) => {
  const items = releases.map(
    ({ basic_information: { master_id, title, year, cover_image } }) => ({
      id: master_id,
      imageUrl: cover_image,
      title: (
        <Box direction="row" gap="small" fill>
          <Box fill>
            <Text truncate={true}>{title}</Text>
          </Box>
          <Text>{year}</Text>
        </Box>
      ),
      icon: <DiscIcon size="large" />,
    })
  )

  return (
    <Box fill pad="medium" align="center">
      <Box margin={{ top: 'medium' }} fill>
        <ResourceList
          items={items}
          onSelectItem={onSelectRelease}
          shouldShowPlaceholders={isLoading}
        />
      </Box>
    </Box>
  )
}

export default CollectionFolderUI
