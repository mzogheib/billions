import React, { FC, useState, FormEvent, ChangeEvent } from 'react'
import { Box, TextInput, Button, Form } from 'grommet'

import ScreenHeader from '../../components/ScreenHeader'

const Search: FC = () => {
  const [searchTerm, setSearchTerm] = useState()

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
      <ScreenHeader onBack={() => console.log('back')} />
      <Box pad="large">stuff</Box>
    </Box>
  )
}

export default Search
