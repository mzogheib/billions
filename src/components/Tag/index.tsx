import React, { FC } from 'react'
import styled from 'styled-components'
import { Text, Box } from 'grommet'

const TextWrapper = styled(Text)`
  text-transform: uppercase;
`

interface Props {
  label: string
}

const Tag: FC<Props> = ({ label }: Props) => (
  <Box background="light-2" round="small" pad="xsmall">
    <TextWrapper size="xsmall" weight="bold">
      {label}
    </TextWrapper>
  </Box>
)

export default Tag
