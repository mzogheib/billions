import React, { FC } from 'react'
import { Box, Button, Header } from 'grommet'
import { Previous } from 'grommet-icons'

import TextLogo from '../../TextLogo'

interface Props {
  children: React.ReactNode
  onBack: () => void
}

const ScreenWrapper: FC<Props> = ({ onBack, children }: Props) => (
  <Box>
    <Header>
      <Box basis="1/3" align="start">
        <Button icon={<Previous color="brand" />} onClick={onBack} />
      </Box>
      <Box basis="1/3" justify="center" direction="row">
        <TextLogo size="large" />
      </Box>
      <Box basis="1/3" />
    </Header>
    {children}
  </Box>
)

export default ScreenWrapper
