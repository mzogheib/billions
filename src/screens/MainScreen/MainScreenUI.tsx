import React, { FC, useState, FormEvent, ChangeEvent } from 'react'
import { Box, TextInput, Button, Form } from 'grommet'

import TextLogo from '../../components/TextLogo'

interface Props {
  onSubmit: (searchTerm: string) => void
}

const MainScreenUI: FC<Props> = ({ onSubmit }: Props) => {
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

    if (!searchTerm) return

    onSubmit(searchTerm)
  }

  const isButtonVisible = searchTerm && searchTerm.length

  return (
    <Box fill pad="large" justify="center" align="center">
      <Form onSubmit={handleSubmit}>
        <Box gap="xlarge" align="center">
          <TextLogo size="xxlarge" />
          <Box background="white">
            <TextInput placeholder="Search..." onChange={handleInputChange} />
          </Box>
          <Box basis="xsmall" width="small">
            {isButtonVisible && <Button primary type="submit" label="Go!" />}
          </Box>
        </Box>
      </Form>
    </Box>
  )
}

export default MainScreenUI
