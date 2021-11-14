import React, { FC } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

import ScreenWrapperUI from './ScreenWrapperUI'

const ScreenWrapper: FC = () => {
  const navigate = useNavigate()

  return (
    <ScreenWrapperUI onBack={(): void => navigate(-1)}>
      <Outlet />
    </ScreenWrapperUI>
  )
}

export default ScreenWrapper
