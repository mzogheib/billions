import React, { FC } from 'react'
import { Text, Box, Image } from 'grommet'
import { Disc as DiscIcon } from 'grommet-icons'

import LoadingBox from '../../../components/LoadingBox'

export interface DataProps {
  imageUrl?: string
  title: string
}

interface FunctionProps {
  onSelect: () => void
}

type Props = DataProps & FunctionProps

const SearchResult: FC<Props> = ({ imageUrl, title, onSelect }: Props) => (
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
      {imageUrl ? (
        <Image src={imageUrl} fit="contain" />
      ) : (
        <DiscIcon size="large" />
      )}
    </Box>
    <Text truncate={true}>{title}</Text>
  </Box>
)

export default SearchResult

export const SearchResultPlaceholder: FC = () => (
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
