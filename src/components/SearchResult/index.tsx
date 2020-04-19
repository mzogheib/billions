import React, { FC } from 'react'
import { Text, Box, Image } from 'grommet'

export interface Props {
  imageUrl?: string
  type: string
  title: string
}

const SearchResult: FC<Props> = ({ imageUrl, type, title }: Props) => (
  <Box
    background="white"
    height="xsmall"
    pad="medium"
    gap="small"
    round="medium"
    direction="row"
  >
    <Box width="xsmall">
      <Image src={imageUrl} fit="contain" />
    </Box>
    <Box justify="center" flex>
      <Text truncate={true}>{title}</Text>
      <Text>{type}</Text>
    </Box>
  </Box>
)

export default SearchResult
