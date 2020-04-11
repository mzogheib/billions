import React, { FC } from 'react'
import { Box } from 'grommet'
import { useHistory } from 'react-router-dom'

import { onOAuthResponse, GeniusOAuthResponse } from '../../services/genius'
import { useQuery } from '../../utils/routerUtils'

const OAuth: FC = () => {
  const parsedQueryParams = useQuery({ hash: true }) as GeniusOAuthResponse
  const { push } = useHistory()

  const handleError = (message: string): void => {
    console.error(message)
    push(`/`)
  }

  onOAuthResponse(parsedQueryParams, handleError)

  return (
    <Box fill pad="large" justify="center" align="center">
      Connecting to Genius...
    </Box>
  )
}

export default OAuth
