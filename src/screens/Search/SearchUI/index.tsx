import React, { FC, useState, FormEvent, ChangeEvent } from 'react'
import styled from 'styled-components'
import { Box, TextInput, Button, Form, Tabs, Tab } from 'grommet'
import {
  Search as SearchIcon,
  Disc as DiscIcon,
  User as UserIcon,
} from 'grommet-icons'

import ResourceList from '../../../components/ResourceList'

const RoundButton = styled(Button)`
  border-radius: 50%;
`

export interface OnSubmit {
  (searchTerm: string): void
}

interface Props {
  defaultSearchTerm?: string
  onSelectArtists: () => void
  onSelectReleases: () => void
  onSelectArtist: (id: number) => void
  onSelectRelease: (id: number) => void
  onSubmit: OnSubmit
  searchResults: {
    id: number
    title: string
    imageUrl: string
  }[]
  isLoading: boolean
}

const SearchUI: FC<Props> = ({
  defaultSearchTerm,
  onSelectArtists,
  onSelectReleases,
  onSelectArtist,
  onSelectRelease,
  onSubmit,
  searchResults,
  isLoading,
}: Props) => {
  const [searchTerm, setSearchTerm] = useState<string | undefined>(
    defaultSearchTerm
  )

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const inputValue = e.target.value

    if (inputValue && inputValue.length) {
      setSearchTerm(inputValue)
    } else {
      setSearchTerm(undefined)
    }
  }

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault()

    if (!searchTerm) return

    onSubmit(searchTerm)
  }

  const tabs = [
    {
      title: 'Artists',
      items: searchResults.map(result => ({
        ...result,
        icon: <UserIcon size="large" />,
      })),
      onSelect: onSelectArtists,
      onSelectResult: onSelectArtist,
    },
    {
      title: 'Releases',
      items: searchResults.map(result => ({
        ...result,
        icon: <DiscIcon size="large" />,
      })),

      onSelect: onSelectReleases,
      onSelectResult: onSelectRelease,
    },
  ]

  const handleSelectTab = (tabIndex: number): void => {
    const { onSelect } = tabs[tabIndex]
    onSelect()
  }

  return (
    <Box fill pad="medium">
      <Form onSubmit={handleSubmit}>
        <Box direction="row" align="center" gap="small">
          <TextInput
            placeholder="Search..."
            value={searchTerm}
            onChange={handleInputChange}
          />
          <RoundButton primary type="submit" icon={<SearchIcon />} />
        </Box>
      </Form>
      <Tabs onActive={handleSelectTab} margin={{ top: 'small' }}>
        {tabs.map(({ title, items, onSelectResult }) => (
          <Tab title={title} key={title}>
            <Box margin={{ top: 'medium' }}>
              <ResourceList
                items={items}
                shouldShowPlaceholders={isLoading}
                onSelectItem={onSelectResult}
              />
            </Box>
          </Tab>
        ))}
      </Tabs>
    </Box>
  )
}

export default SearchUI
