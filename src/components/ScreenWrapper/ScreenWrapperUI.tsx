import React, { FC } from 'react'
import { Box, Button } from 'grommet'
import { Previous } from 'grommet-icons'

import TextLogo from '../TextLogo'

interface Props {
  children: React.ReactNode
  onBack: () => void
}

const ScreenWrapper: FC<Props> = ({ onBack, children }: Props) => (
  <Box>
    <Box
      as="header"
      direction="row"
      justify="between"
      align="center"
      height="xxsmall"
    >
      <Box basis="1/3" align="start">
        <Button icon={<Previous color="brand" />} onClick={onBack} />
      </Box>
      <Box basis="1/3" justify="center" direction="row">
        <TextLogo size="xxsmal" />
      </Box>
      <Box basis="1/3" />
    </Box>
    {children}
  </Box>
)

export default ScreenWrapper
