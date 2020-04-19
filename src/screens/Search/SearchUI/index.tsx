import React, { FC, useState, FormEvent, ChangeEvent } from 'react'
import { Box, TextInput, Button, Form, Tabs, Tab } from 'grommet'
import { Search as SearchIcon } from 'grommet-icons'

import SearchResultsList, { SearchResults } from '../SearchResultsList'

export interface OnSubmit {
  (searchTerm: string): void
}

interface Props {
  defaultSearchTerm?: string
  onSelectArtists: () => void
  onSelectReleases: () => void
  onSubmit: OnSubmit
  searchResults: SearchResults
}

const SearchUI: FC<Props> = ({
  defaultSearchTerm,
  onSelectArtists,
  onSelectReleases,
  onSubmit,
  searchResults,
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
      onSelect: onSelectArtists,
    },
    {
      title: 'Releases',
      onSelect: onSelectReleases,
    },
  ]

  const handleSelectTab = (tabIndex: number): void => {
    const { onSelect } = tabs[tabIndex]
    onSelect()
  }

  return (
    <Box fill>
      <Form onSubmit={handleSubmit}>
        <Box direction="row" align="center" gap="small" pad="medium">
          <TextInput
            placeholder="Search..."
            value={searchTerm}
            onChange={handleInputChange}
          />
          <Button primary type="submit" icon={<SearchIcon />} />
        </Box>
      </Form>
      <Tabs onActive={handleSelectTab}>
        {tabs.map(({ title }) => (
          <Tab title={title} key={title}>
            <SearchResultsList results={searchResults} />
          </Tab>
        ))}
      </Tabs>
    </Box>
  )
}

export default SearchUI
