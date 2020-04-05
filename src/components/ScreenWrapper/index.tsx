import React, { FC } from 'react'
import { useHistory } from 'react-router-dom'

import ScreenWrapperComponent from './component'

interface Props {
  children: React.ReactNode
}

const ScreenWrapper: FC<Props> = ({ children }: Props) => {
  const history = useHistory()

  return (
    <ScreenWrapperComponent onBack={(): void => history.goBack()}>
      {children}
    </ScreenWrapperComponent>
  )
}

export default ScreenWrapper
