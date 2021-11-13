import React, { FC, ReactNode } from 'react'
import { Box, Image, Heading, Text } from 'grommet'
import { Disc as DiscIcon } from 'grommet-icons'
import ResourceList from '../../../components/ResourceList'
import LoadingBox from '../../../components/LoadingBox'

type Track = {
  position: string
  title: string
  duration: string
}

interface Props {
  title: string
  artistName?: string
  year?: number
  trackList?: Track[]
  primaryImageUrl?: string
}

const ReleaseUI: FC<Props> = ({
  title,
  year,
  artistName,
  trackList,
  primaryImageUrl,
}: Props) => {
  const artistNameAndTitle = [artistName, title]
    .filter(titleItem => !!titleItem)
    .join(' - ')

  const renderTrackList = (tracks?: Track[]): ReactNode => {
    if (!(tracks && tracks.length)) {
      return null
    }

    const items = tracks.map(({ position, title, duration }, id) => ({
      id,
      title: (
        <Box direction="row" gap="small" fill>
          <Text>{position}</Text>
          <Box fill>
            <Text truncate={true}>{title}</Text>
          </Box>
          <Text>{duration}</Text>
        </Box>
      ),
      icon: <DiscIcon size="large" />,
    }))

    return <ResourceList items={items} />
  }

  return (
    <Box fill pad="medium" align="center">
      <Box flex="grow" width={{ max: 'small' }} height="small">
        {primaryImageUrl ? (
          <Image src={primaryImageUrl} fit="contain" />
        ) : (
          <DiscIcon size="100%" />
        )}
      </Box>
      <Heading textAlign="center">{artistNameAndTitle}</Heading>
      <Heading level="2" textAlign="center">
        {year}
      </Heading>
      <Box margin={{ top: 'medium' }} fill>
        {renderTrackList(trackList)}
      </Box>
    </Box>
  )
}

export const ReleaseUIPlaceholder: FC = () => (
  <Box fill pad="medium" align="center">
    <Box flex="grow" width={{ max: 'small' }} height="small">
      <DiscIcon size="100%" />
    </Box>
    <Heading textAlign="center">
      <LoadingBox width="medium" />
    </Heading>
    <Heading level="2" textAlign="center">
      <LoadingBox width="xsmall" />
    </Heading>
    <Box margin={{ top: 'medium' }} fill>
      <ResourceList
        items={[]}
        numPlaceholders={5}
        shouldShowPlaceholders={true}
      />
    </Box>
  </Box>
)

export default ReleaseUI
