import React, { FC, useState, FormEvent, ChangeEvent, useEffect } from 'react'
import { Box, TextInput, Button, Form } from 'grommet'
import { Search as SearchIcon } from 'grommet-icons'
import { useHistory } from 'react-router-dom'

import { useQuery, makeQueryParams } from '../../utils/routerUtils'
import { search, SearchResult } from '../../services/discogs'

const Search: FC = () => {
  const { query } = useQuery() as { query: string } // It's safe to assume it will only be a string
  const { replace } = useHistory()
  const [searchTerm, setSearchTerm] = useState<string | undefined>(query)
  const [searchResults, setSearchResults] = useState<SearchResult[]>([])

  const handleSearch = async (query: string): Promise<void> => {
    if (!query) return

    const response = await search({ query })
    const results = response.data.results.map(({ title, type }) => ({
      title,
      type,
    }))
    setSearchResults(results)
  }

  useEffect(() => {
    handleSearch(query)
  }, [query])

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
    if (!searchTerm || searchTerm === query) return
    // TODO: This should probably be in a parent so that this component remains
    // as a pure UI component
    replace(`/search?${makeQueryParams({ query: searchTerm })}`)
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
      <Box pad="medium">
        <code>{JSON.stringify(searchResults)}</code>
      </Box>
    </Box>
  )
}

export default Search
