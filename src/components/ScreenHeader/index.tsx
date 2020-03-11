import React, { FC } from 'react'
import { Box, Button } from 'grommet'
import { Previous } from 'grommet-icons'

import TextLogo from '../TextLogo'

interface Props {
  onBack?: () => void
}

const ScreenHeader: FC<Props> = ({ onBack }: Props) => (
  <Box
    as="header"
    direction="row"
    justify="between"
    align="center"
    height="xxsmall"
  >
    <Box basis="1/3" align="start">
      {onBack && <Button icon={<Previous color="brand" />} onClick={onBack} />}
    </Box>
    <Box basis="1/3" justify="center" direction="row">
      <TextLogo size="xxsmal" />
    </Box>
    <Box basis="1/3" />
  </Box>
)

export default ScreenHeader
