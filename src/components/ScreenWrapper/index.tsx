import React, { FC } from 'react'
import { Box, Button } from 'grommet'
import { Previous } from 'grommet-icons'
import { useHistory } from 'react-router-dom'

import TextLogo from '../TextLogo'

interface Props {
  children: React.ReactNode
}

const ScreenWrapper: FC<Props> = ({ children }: Props) => {
  const history = useHistory()

  const handleClickBack = (): void => history.goBack()

  return (
    <Box>
      <Box
        as="header"
        direction="row"
        justify="between"
        align="center"
        height="xxsmall"
      >
        <Box basis="1/3" align="start">
          <Button icon={<Previous color="brand" />} onClick={handleClickBack} />
        </Box>
        <Box basis="1/3" justify="center" direction="row">
          <TextLogo size="xxsmal" />
        </Box>
        <Box basis="1/3" />
      </Box>
      {children}
    </Box>
  )
}
export default ScreenWrapper
