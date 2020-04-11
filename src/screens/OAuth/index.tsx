import React, { FC } from 'react'
import { Box } from 'grommet'

import { onOAuthResponse, GeniusOAuthResponse } from '../../services/genius'
import { useQuery } from '../../utils/routerUtils'

const OAuth: FC = () => {
  const parsedQueryParams = useQuery({ hash: true }) as GeniusOAuthResponse

  console.log('OAuth', parsedQueryParams)

  const handleError = (message: string): void => {
    console.error(message)
  }

  // Pass through any error messages to the settings page, which is where
  // the user would have started to get here
  onOAuthResponse(parsedQueryParams, handleError)

  return (
    <Box fill pad="large" justify="center" align="center">
      Connecting to Genius...
    </Box>
  )
}

export default OAuth
