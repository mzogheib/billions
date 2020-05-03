import React, { FC } from 'react'
import { Box, BoxProps } from 'grommet'

const LoadingBox: FC<BoxProps> = ({
  height = 'xxsmall',
  ...rest
}: BoxProps) => <Box background="light-2" height={height} {...rest} />

export default LoadingBox
