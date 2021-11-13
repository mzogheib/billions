import React, { FC, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from 'grommet'

import { fetchMaster, FetchMasterResponseData } from '../../services/discogs'
import ReleaseUI from './ReleaseUI'

type HandleFetchReleaseParams = {
  id: number
}

interface HandleFetchRelease {
  (params: HandleFetchReleaseParams): Promise<void>
}

const Release: FC = () => {
  const { releaseId } = useParams<{ releaseId: string }>()

  const [release, setRelease] = useState<FetchMasterResponseData | null>(null)
  const [isLoading, setLoading] = useState(false)

  const handleFetchRelease: HandleFetchRelease = async ({ id }) => {
    setLoading(true)

    const response = await fetchMaster({ id })

    setRelease(response)
    setLoading(false)
  }

  useEffect(() => {
    if (releaseId) {
      handleFetchRelease({ id: Number(releaseId) })
    }
  }, [releaseId])

  if (isLoading) {
    return (
      <Box fill pad="medium">
        Loading...
      </Box>
    )
  }

  if (!release) {
    return (
      <Box fill pad="medium">
        No release found
      </Box>
    )
  }

  const { title, artists, images, year, tracklist } = release
  const primaryImageUrl = images && images.length ? images[0].uri : undefined
  const artistName = artists && artists.length ? artists[0].name : undefined

  return (
    <ReleaseUI
      title={title}
      artistName={artistName}
      primaryImageUrl={primaryImageUrl}
      year={year}
      trackList={tracklist}
    />
  )
}

export default Release
