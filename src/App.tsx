import React, { FC } from 'react'
import { Grommet } from 'grommet'
import { grommet } from 'grommet/themes'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import MainScreen from './screens/MainScreen'
import Search from './screens/Search'
import Artist from './screens/Artist'
import Release from './screens/Release'
import Folders from './screens/Folders'
import Folder from './screens/Folder'
import ScreenWrapper from './components/ScreenWrapper'

const App: FC = () => (
  <Grommet theme={grommet} background="light-1" full>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainScreen />} />
        <Route path="/" element={<ScreenWrapper />}>
          <Route path="/search" element={<Search />} />
          <Route path="/artists/:artistId" element={<Artist />} />
          <Route path="/releases/:releaseId" element={<Release />} />
          <Route path="/folders" element={<Folders />} />
          <Route path="/folders/:folderId" element={<Folder />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Grommet>
)

export default App
