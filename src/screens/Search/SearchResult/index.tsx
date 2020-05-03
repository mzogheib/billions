import React, { FC } from 'react'
import { Text, Box, Image } from 'grommet'
import { Disc as DiscIcon } from 'grommet-icons'

import LoadingBox from '../../../components/LoadingBox'

export interface Props {
  imageUrl?: string
  title: string
}

const SearchResult: FC<Props> = ({ imageUrl, title }: Props) => (
  <Box
    background="white"
    pad="medium"
    gap="small"
    round="medium"
    direction="row"
    align="center"
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
