import React, { FC, useState, FormEvent, ChangeEvent } from 'react'
import { Box, TextInput, Button, Form, Tabs, Tab } from 'grommet'
import { Search as SearchIcon } from 'grommet-icons'

import SearchResultsList, { SearchResults } from '../SearchResultsList'

interface Props {
  defaultSearchTerm?: string
  filter: { type: string }
  onChangeFilter: ({ type }: { type: string }) => void
  onSubmit: (searchTerm: string) => void
  searchResults: SearchResults
}

const SearchUI: FC<Props> = ({
  defaultSearchTerm,
  filter,
  onChangeFilter,
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
      type: 'artist',
    },
    {
      title: 'Releases',
      type: 'release',
    },
  ]

  const handleSelectTab = (tabIndex: number): void => {
    const type = tabs[tabIndex].type
    onChangeFilter({ type })
  }

  const getActiveTabIndex = (): number => {
    const index = tabs.findIndex(({ type }) => type === filter.type)
    return index === -1 ? 0 : index
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
      <Tabs activeIndex={getActiveTabIndex()} onActive={handleSelectTab}>
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
