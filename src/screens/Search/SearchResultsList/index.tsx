import React, { FC } from 'react'
import { Box } from 'grommet'

import ResourceListItem, {
  DataProps as ResourceListItemProps,
  ResourceListItemPlaceholder,
} from '../../../components/ResourceList/ResourceListItem'

// Need an id to add as the key for each list item
export type ResourceListItems = (ResourceListItemProps & { id: number })[]

interface Props {
  results: ResourceListItems
  onSelectResult: (id: number) => void
}

const SearchResultsList: FC<Props> = ({ results, onSelectResult }: Props) => (
  <Box pad="medium" gap="medium">
    {results.map(({ id, title, imageUrl }) => (
      <ResourceListItem
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
    <ResourceListItemPlaceholder key={index} />
  ))

  return (
    <Box pad="medium" gap="medium">
      {placeholderRows}
    </Box>
  )
}
