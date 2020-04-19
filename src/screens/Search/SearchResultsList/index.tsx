import React, { FC } from 'react'
import { Box } from 'grommet'

import SearchResult, {
  Props as SearchResultInterface,
} from '../../../components/SearchResult'

// Need an id to add as the key for each list item
export type SearchResults = (SearchResultInterface & { id: number })[]

interface Props {
  results: SearchResults
}

const SearchResultsList: FC<Props> = ({ results }: Props) => (
  <Box pad="medium" gap="medium">
    {results.map(({ id, title, imageUrl }) => (
      <SearchResult key={id} title={title} imageUrl={imageUrl} />
    ))}
  </Box>
)

export default SearchResultsList
