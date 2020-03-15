import React, { FC, useState, FormEvent, ChangeEvent } from 'react'
import { Box, TextInput, Button, Form, Tabs, Tab } from 'grommet'
import { Search as SearchIcon } from 'grommet-icons'

const Search: FC = () => {
  const [searchTerm, setSearchTerm] = useState<string | undefined>()

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
    console.log(searchTerm)
  }

  return (
    <Box fill>
      <Form onSubmit={handleSubmit}>
        <Box direction="row" align="center" gap="small" pad="medium">
          <TextInput placeholder="Search..." onChange={handleInputChange} />
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
