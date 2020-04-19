import React, { FC, useState, FormEvent, ChangeEvent } from 'react'
import { Box, TextInput, Button, Form, Tabs, Tab } from 'grommet'
import { Search as SearchIcon } from 'grommet-icons'

import SearchResultsList, { SearchResults } from '../SearchResultsList'

interface Props {
  defaultSearchTerm?: string
  onSubmit: (searchTerm: string) => void
  searchResults: SearchResults
}

const SearchUI: FC<Props> = ({
  defaultSearchTerm,
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
      <Tabs>
        <Tab title="Artists">
          <SearchResultsList
            results={searchResults.filter(({ type }) => type === 'artist')}
          />
        </Tab>
        <Tab title="Releases">
          <SearchResultsList
            results={searchResults.filter(({ type }) => type === 'master')}
          />
        </Tab>
      </Tabs>
    </Box>
  )
}

export default SearchUI
