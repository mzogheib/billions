import React, { FC, ReactNode } from 'react'
import { Text, Box, Image } from 'grommet'

import LoadingBox from '../../../components/LoadingBox'

interface Props {
  imageUrl?: string
  icon: ReactNode
  title: ReactNode
}

const ResourceListItem: FC<Props> = ({ imageUrl, icon, title }: Props) => (
  <Box
    background="white"
    pad="medium"
    gap="small"
    round="medium"
    direction="row"
    align="center"
  >
    <Box flex="grow" width={{ max: 'xxsmall' }} height="xxsmall">
      {imageUrl ? <Image src={imageUrl} fit="contain" /> : icon}
    </Box>
    {typeof title === 'string' ? <Text truncate={true}>{title}</Text> : title}
  </Box>
)

export default ResourceListItem

export const ResourceListItemPlaceholder: FC = () => (
  <Box
    background="white"
    pad="medium"
    gap="small"
    round="medium"
    direction="row"
    align="center"
  >
    <LoadingBox width="xxsmall" />
    <LoadingBox flex="grow" height="24px" />
  </Box>
)
