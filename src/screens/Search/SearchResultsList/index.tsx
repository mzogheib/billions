import React, { FC } from 'react'
import { Box } from 'grommet'
import { Disc } from 'grommet-icons'

import ResourceListItem, {
  ResourceListItemPlaceholder,
} from '../../../components/ResourceList/ResourceListItem'

interface Props {
  results: {
    id: number
    title: string
    imageUrl: string
  }[]
  onSelectResult: (id: number) => void
}

const SearchResultsList: FC<Props> = ({ results, onSelectResult }: Props) => (
  <Box pad="medium" gap="medium">
    {results.map(({ id, title, imageUrl }) => (
      <ResourceListItem
        key={id}
        title={title}
        imageUrl={imageUrl}
        icon={<Disc size="large" />}
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
