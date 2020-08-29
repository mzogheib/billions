import React, { FC } from 'react'
import { Box } from 'grommet'

import SearchResult, {
  DataProps as SearchResultProps,
  SearchResultPlaceholder,
} from '../SearchResult'

// Need an id to add as the key for each list item
export type SearchResults = (SearchResultProps & { id: number })[]

interface Props {
  results: SearchResults
  onSelectResult: (id: number) => void
}

const SearchResultsList: FC<Props> = ({ results, onSelectResult }: Props) => (
  <Box pad="medium" gap="medium">
    {results.map(({ id, title, imageUrl }) => (
      <SearchResult
        key={id}
        title={title}
        imageUrl={imageUrl}
        onSelect={(): void => onSelectResult(id)}
      />
    ))}
  </Box>
)

export default SearchResultsList

export const SearchResultsListPlaceholder: FC = () => {
  const maxRows = 10
  const placeholderRows = [...Array(maxRows)].map((_, index) => (
    <SearchResultPlaceholder key={index} />
  ))

  return (
    <Box pad="medium" gap="medium">
      {placeholderRows}
    </Box>
  )
}
