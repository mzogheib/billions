import React, { FC } from 'react'
import { Box, TextInput, Button } from 'grommet'

const MainScreen: FC = () => (
  <Box fill pad="large" justify="center" align="center">
    Geenious
    <Box background="white">
      <TextInput placeholder="Search..." />
    </Box>
    <Button primary label="Go!" />
  </Box>
)

export default MainScreen
