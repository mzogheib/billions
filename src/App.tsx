import React, { FC } from 'react'
import { Grommet } from 'grommet'
import { grommet } from 'grommet/themes'

import MainScreen from './screens/MainScreen'
import Search from './screens/Search'
import ScreenWrapper from './components/ScreenWrapper'

const App: FC = () => {
  return (
    <Grommet theme={grommet} background="light-1" full>
      {/* <MainScreen /> */}
      <ScreenWrapper>
        <Search />
      </ScreenWrapper>
    </Grommet>
  )
}

export default App
