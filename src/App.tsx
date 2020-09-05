import React, { FC } from 'react'
import { Grommet } from 'grommet'
import { grommet } from 'grommet/themes'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import MainScreen from './screens/MainScreen'
import Search from './screens/Search'
import Artist from './screens/Artist'
import Release from './screens/Release'
import ScreenWrapper from './components/ScreenWrapper'

const App: FC = () => {
  return (
    <Grommet theme={grommet} background="light-1" full>
      <Router>
        <Switch>
          <Route exact path="/">
            <MainScreen />
          </Route>
          <Route path="/search">
            <ScreenWrapper>
              <Search />
            </ScreenWrapper>
          </Route>
          <Route path="/artists/:artistId">
            <ScreenWrapper>
              <Artist />
            </ScreenWrapper>
          </Route>
          <Route path="/releases/:releaseId">
            <ScreenWrapper>
              <Release />
            </ScreenWrapper>
          </Route>
        </Switch>
      </Router>
    </Grommet>
  )
}

export default App
