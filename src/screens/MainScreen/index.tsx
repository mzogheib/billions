import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom'

import { makeQueryParams } from '../../utils/routerUtils'
import MainScreenUI from './MainScreenUI'

const MainScreen: FC = () => {
  const navigate = useNavigate()

  const handleSubmit = (query: string): void => {
    navigate(`/search?${makeQueryParams({ query })}`)
  }

  const handleClickCollection = (): void => {
    navigate('/folders')
  }

  return (
    <MainScreenUI
      onSubmit={handleSubmit}
      onClickCollection={handleClickCollection}
    />
  )
}

export default MainScreen
