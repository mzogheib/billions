import React, { FC } from 'react'
import { Grommet } from 'grommet'
import { grommet } from 'grommet/themes'

import MainScreen from './screens/MainScreen'

const App: FC = () => {
  return (
    <Grommet theme={grommet} background="light-1" full>
      <MainScreen />
    </Grommet>
  )
}

export default App
