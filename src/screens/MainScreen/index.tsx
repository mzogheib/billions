import React, { FC, useState, FormEvent, ChangeEvent } from 'react'
import { Box, TextInput, Button, Form } from 'grommet'
import { useHistory } from 'react-router-dom'

import { makeQueryParams } from '../../utils/routerUtils'
import { hasAccessToken, openAuthPage } from '../../services/genius'
import TextLogo from '../../components/TextLogo'

const MainScreen: FC = () => {
  const [searchTerm, setSearchTerm] = useState<string | undefined>()
  const [isConnected, setConnected] = useState<boolean>(hasAccessToken())
  const { push } = useHistory()

  // TODO: if isConnected, check if the accessToken is still valid

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

    push(`/search?${makeQueryParams({ query: searchTerm })}`)
  }

  const handleConnect = (): void => {
    const onSuccess = (): void => {
      setConnected(true)
    }

    const onError = (message: string): void => {
      console.error(message)
    }

    openAuthPage({ onSuccess, onError })
  }

  const isButtonVisible = searchTerm && searchTerm.length

  return (
    <Box fill pad="large" justify="center" align="center">
      <Form onSubmit={handleSubmit}>
        <Box gap="xlarge" align="center">
          <TextLogo size="xxlarge" />
          {isConnected && (
            <Box background="white">
              <TextInput placeholder="Search..." onChange={handleInputChange} />
            </Box>
          )}
          {!isConnected && (
            <Button primary label="Connect to Genius" onClick={handleConnect} />
          )}
          <Box basis="xsmall" width="small">
            {isButtonVisible && <Button primary type="submit" label="Go!" />}
          </Box>
        </Box>
      </Form>
    </Box>
  )
}

export default MainScreen
