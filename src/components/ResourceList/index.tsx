import React, { FC, ReactNode } from 'react'
import { Box } from 'grommet'

import ResourceListItem, {
  ResourceListItemPlaceholder,
} from './ResourceListItem'

interface DataProps {
  items: {
    id: number
    imageUrl?: string
    icon: ReactNode
    title: string
  }[]
  shouldShowPlaceholders?: boolean
  numPlaceholders?: number
}

interface FunctionProps {
  onSelectItem: (id: number) => void
}

type Props = DataProps & FunctionProps

const ResourceList: FC<Props> = ({
  items,
  shouldShowPlaceholders = false,
  numPlaceholders = 10,
  onSelectItem,
}: Props) => {
  if (shouldShowPlaceholders) {
    const placeholderRows = [...Array(numPlaceholders)].map((_, index) => (
      <ResourceListItemPlaceholder key={index} />
    ))

    return <Box gap="medium">{placeholderRows}</Box>
  }

  return (
    <Box gap="medium">
      {items.map(({ id, imageUrl, icon, title }) => (
        <ResourceListItem
          key={id}
          imageUrl={imageUrl}
          title={title}
          icon={icon}
          onSelect={(): void => onSelectItem(id)}
        />
      ))}
    </Box>
  )
}

export default ResourceList