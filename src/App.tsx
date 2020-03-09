import React, { FC } from 'react'
import { Grommet, Box } from 'grommet'
import { grommet } from 'grommet/themes'

import MainScreen from './screens/MainScreen'

const App: FC = () => {
  return (
    <Grommet theme={grommet} full>
      <Box fill background="light-1">
        <MainScreen />
      </Box>
    </Grommet>
  )
}

export default App
