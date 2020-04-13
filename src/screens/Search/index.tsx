import React, { FC, useState, FormEvent, ChangeEvent, useEffect } from 'react'
import { Box, TextInput, Button, Form, Tabs, Tab } from 'grommet'
import { Search as SearchIcon } from 'grommet-icons'
import { useHistory } from 'react-router-dom'

import { useQuery, makeQueryParams } from '../../utils/routerUtils'

const handleSearch = async (query: string): Promise<void> => {
  if (!query) return

  console.log('Searching for:', query)
}

const Search: FC = () => {
  const { query } = useQuery() as { query: string } // It's safe to assume it will only be a string
  const { replace } = useHistory()
  const [searchTerm, setSearchTerm] = useState<string | undefined>(query)

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
        <Tabs onActive={(value): void => console.log('clicked: ', value)}>
          <Tab title="All">
            <Box pad="medium">All</Box>
          </Tab>
          <Tab title="Artists">
            <Box pad="medium">Artists</Box>
          </Tab>
          <Tab title="Songs">
            <Box pad="medium">Songs</Box>
          </Tab>
        </Tabs>
      </Box>
    </Box>
  )
}

export default Search
