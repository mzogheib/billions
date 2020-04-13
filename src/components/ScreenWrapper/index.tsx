import React, { FC } from 'react'
import { useHistory } from 'react-router-dom'

import ScreenWrapperUI from './ScreenWrapperUI'

interface Props {
  children: React.ReactNode
}

const ScreenWrapper: FC<Props> = ({ children }: Props) => {
  const { goBack } = useHistory()

  return <ScreenWrapperUI onBack={goBack}>{children}</ScreenWrapperUI>
}

export default ScreenWrapper
