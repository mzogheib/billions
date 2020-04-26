import React, { FC } from 'react'
import { Text, Box, Image } from 'grommet'
import { Disc as DiscIcon } from 'grommet-icons'

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
        <DiscIcon size="xsmall" />
      )}
    </Box>
    <Text truncate={true}>{title}</Text>
  </Box>
)

export default SearchResult
