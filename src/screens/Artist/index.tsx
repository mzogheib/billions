import React, { FC, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from 'grommet'

import { fetchArtist, FetchArtistResponseData } from '../../services/discogs'
import ArtistUI from './ArtistUI'

type HandleFetchArtistParams = {
  id: number
}

interface HandleFetchArtist {
  (params: HandleFetchArtistParams): Promise<void>
}

const Artist: FC = () => {
  const { artistId } = useParams()

  const [artist, setArtist] = useState<FetchArtistResponseData | null>(null)
  const [isLoading, setLoading] = useState(false)

  const handleFetchArtist: HandleFetchArtist = async ({ id }) => {
    setLoading(true)

    const response = await fetchArtist({ id })
    const artistResponse = response.data

    setArtist(artistResponse)
    setLoading(false)
  }

  useEffect(() => {
    if (artistId) {
      handleFetchArtist({ id: Number(artistId) })
    }
  }, [artistId])

  if (isLoading) {
    return (
      <Box fill pad="medium">
        Loading...
      </Box>
    )
  }

  if (!artist) {
    return (
      <Box fill pad="medium">
        No artist found
      </Box>
    )
  }

  const { name, images, profile: aboutText, members, urls } = artist
  const primaryImageUrl = images && images.length ? images[0].uri : undefined
  const isIndividual = !(members && members.length)

  const handleSelectUrl = (url: string): void => {
    window.open(url, '_blank')
  }

  return (
    <ArtistUI
      name={name}
      primaryImageUrl={primaryImageUrl}
      aboutText={aboutText}
      isIndividual={isIndividual}
      externalUrls={urls}
      onSelectUrl={handleSelectUrl}
    />
  )
}

export default Artist
