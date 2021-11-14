import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom'

import ScreenWrapperUI from './ScreenWrapperUI'

interface Props {
  children: React.ReactNode
}

const ScreenWrapper: FC<Props> = ({ children }: Props) => {
  const navigate = useNavigate()

  return (
    <ScreenWrapperUI onBack={(): void => navigate(-1)}>
      {children}
    </ScreenWrapperUI>
  )
}

export default ScreenWrapper
