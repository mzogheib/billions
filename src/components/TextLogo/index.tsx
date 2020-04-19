import React, { FC } from 'react'
import { Text } from 'grommet'
import styled from 'styled-components'

const Wrapper = styled(Text)`
  font-family: 'FredokaOne';
`

interface Props {
  size?: string
}

// Feels redundant to specify the type twice but here is some background as to why
// https://github.com/yannickcr/eslint-plugin-react/issues/2353
const TextLogo: FC<Props> = ({ size }: Props) => (
  <Wrapper size={size} color="brand">
    Billions
  </Wrapper>
)

export default TextLogo
