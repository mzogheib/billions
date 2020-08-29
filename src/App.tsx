import React, { FC } from 'react'
import { Grommet } from 'grommet'
import { grommet } from 'grommet/themes'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import MainScreen from './screens/MainScreen'
import Search from './screens/Search'
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
              <div>Artist page</div>
            </ScreenWrapper>
          </Route>
          <Route path="/releases/:releaseId">
            <ScreenWrapper>
              <div>Release page</div>
            </ScreenWrapper>
          </Route>
        </Switch>
      </Router>
    </Grommet>
  )
}

export default App
