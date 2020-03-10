import React, { FC, useState } from 'react'
import { Box, TextInput, Button, Text } from 'grommet'

const MainScreen: FC = () => {
  const [searchTerm, setSearchTerm] = useState()

  const handleInputChange = (e: any): void => {
    const inputValue = e.target.value

    if (inputValue && inputValue.length) {
      setSearchTerm(inputValue)
    } else {
      setSearchTerm(undefined)
    }
  }

  const handleSubmit = (e: any): void => {
    e.preventDefault()
    console.log(searchTerm)
  }

  const isButtonVisible = searchTerm && searchTerm.length

  return (
    <Box
      fill
      as="form"
      pad="large"
      gap="xlarge"
      justify="center"
      align="center"
    >
      <Text size="xxlarge">Geenious</Text>
      <Box background="white">
        <TextInput placeholder="Search..." onChange={handleInputChange} />
      </Box>
      <Box basis="xsmall" width="small">
        {isButtonVisible && (
          <Button primary type="submit" label="Go!" onClick={handleSubmit} />
        )}
      </Box>
    </Box>
  )
}

export default MainScreen
