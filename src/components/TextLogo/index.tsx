import React, { FC } from 'react'
import { Text } from 'grommet'

interface Props {
  size?: string
}

// Feels redundant to specify the type twice but here is some background as to why
// https://github.com/yannickcr/eslint-plugin-react/issues/2353
const TextLogo: FC<Props> = ({ size }: Props) => (
  <Text size={size} color="brand">
    Geenious
  </Text>
)

export default TextLogo
