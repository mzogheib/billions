import React, { FC } from 'react'
import { useHistory } from 'react-router-dom'

import { makeQueryParams } from '../../utils/routerUtils'
import MainScreenUI from './MainScreenUI'

const MainScreen: FC = () => {
  const { push } = useHistory()

  const handleSubmit = (query: string): void => {
    push(`/search?${makeQueryParams({ query })}`)
  }

  return <MainScreenUI onSubmit={handleSubmit} />
}

export default MainScreen
