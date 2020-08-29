import React, { FC } from 'react'
import { useParams } from 'react-router-dom'

const Artist: FC = () => {
  const params = useParams()

  return <div>{JSON.stringify(params)}</div>
}

export default Artist
