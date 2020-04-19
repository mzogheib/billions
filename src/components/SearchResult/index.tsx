import React, { FC } from 'react'
import { Text, Box, Image } from 'grommet'
import { Disc as DiscIcon } from 'grommet-icons'

import Tag from '../Tag'

export interface Props {
  imageUrl?: string
  type: string
  title: string
}

const SearchResult: FC<Props> = ({ imageUrl, type, title }: Props) => (
  <Box
    background="white"
    pad="medium"
    gap="small"
    round="medium"
    direction="row"
    align="center"
  >
    <Box width="xxsmall" height="xxsmall">
      {imageUrl ? (
        <Image src={imageUrl} fit="contain" />
      ) : (
        <DiscIcon size="xsmall" />
      )}
    </Box>
    <Box justify="center" flex gap="xsmall">
      <Text truncate={true}>{title}</Text>
      <Box direction="row" justify="end">
        <Tag label={type} />
      </Box>
    </Box>
  </Box>
)

export default SearchResult
