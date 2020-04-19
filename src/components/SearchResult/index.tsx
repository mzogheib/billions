import React, { FC } from 'react'
import { Text, Box, Image } from 'grommet'
import { Disc as DiscIcon } from 'grommet-icons'

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
  >
    <Box width="xxsmall" height="xxsmall">
      {imageUrl ? (
        <Image src={imageUrl} fit="contain" />
      ) : (
        <DiscIcon size="xsmall" />
      )}
    </Box>
    <Box justify="center" flex>
      <Text truncate={true}>{title}</Text>
      <Text>{type}</Text>
    </Box>
  </Box>
)

export default SearchResult
