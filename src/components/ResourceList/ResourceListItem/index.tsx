import React, { FC, ReactNode } from 'react'
import { Text, Box, Image } from 'grommet'

import LoadingBox from '../../../components/LoadingBox'

interface DataProps {
  imageUrl?: string
  icon: ReactNode
  title: string
}

interface FunctionProps {
  onSelect: () => void
}

type Props = DataProps & FunctionProps

const ResourceListItem: FC<Props> = ({
  imageUrl,
  icon,
  title,
  onSelect,
}: Props) => (
  <Box
    background="white"
    pad="medium"
    gap="small"
    round="medium"
    direction="row"
    align="center"
    onClick={onSelect}
  >
    <Box flex="grow" width={{ max: 'xxsmall' }} height="xxsmall">
      {imageUrl ? <Image src={imageUrl} fit="contain" /> : icon}
    </Box>
    <Text truncate={true}>{title}</Text>
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
