import React, { FC } from 'react'
import { useHistory } from 'react-router-dom'

import { makeQueryParams } from '../../utils/routerUtils'
import MainScreenUI from './MainScreenUI'

const MainScreen: FC = () => {
  const { push } = useHistory()

  const handleSubmit = (newQuery?: string): void => {
    if (!newQuery) return
    push(`/search?${makeQueryParams({ query: newQuery })}`)
  }

  return <MainScreenUI onSubmit={handleSubmit} />
}

export default MainScreen
