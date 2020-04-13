import React, { FC, useState, FormEvent, ChangeEvent } from 'react'
import { Box, TextInput, Button, Form } from 'grommet'
import { Search as SearchIcon } from 'grommet-icons'

import { SearchResult } from '../../services/discogs'

interface Props {
  defaultSearchTerm: string
  onSubmit: (searchTerm?: string) => void
  searchResults: SearchResult[]
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
      <Box pad="medium">
        <code>{JSON.stringify(searchResults)}</code>
      </Box>
    </Box>
  )
}

export default SearchUI
