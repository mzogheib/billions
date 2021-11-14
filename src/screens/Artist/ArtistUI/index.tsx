import React, { FC, ReactNode } from 'react'
import { Box, Image, Heading, Tab, Tabs } from 'grommet'
import {
  Group as GroupIcon,
  User as UserIcon,
  Link as LinkIcon,
} from 'grommet-icons'
import ResourceList from '../../../components/ResourceList'
import LoadingBox from '../../../components/LoadingBox'

interface Props {
  name: string
  primaryImageUrl?: string
  isIndividual: boolean
  aboutText?: string
  externalUrls?: string[]
  onSelectUrl(url: string): void
}

const ArtistUI: FC<Props> = ({
  name,
  primaryImageUrl,
  isIndividual,
  aboutText,
  externalUrls,
  onSelectUrl,
}: Props) => {
  const PlaceholderIcon = isIndividual ? UserIcon : GroupIcon

  const hasTabs = !!aboutText || (externalUrls && externalUrls.length)

  const renderLinksTab = (urls?: string[]): ReactNode => {
    if (!(urls && urls.length)) {
      return null
    }

    const items = urls.map((url, id) => ({
      id,
      title: url,
      icon: <LinkIcon size="large" />,
    }))

    const handleSelectItem = (id: number): void => {
      onSelectUrl(urls[id])
    }

    return (
      <Tab title="Links">
        <Box margin={{ top: 'medium' }}>
          <ResourceList items={items} onSelectItem={handleSelectItem} />
        </Box>
      </Tab>
    )
  }

  return (
    <Box fill pad="medium" align="center">
      <Box flex="grow" width={{ max: 'small' }} height="small">
        {primaryImageUrl ? (
          <Image src={primaryImageUrl} fit="contain" />
        ) : (
          <PlaceholderIcon size="100%" />
        )}
      </Box>
      <Heading textAlign="center">{name}</Heading>
      {hasTabs && (
        <Box fill>
          <Tabs>
            {aboutText && (
              <Tab title="About">
                <Box
                  background="white"
                  pad="medium"
                  round="medium"
                  margin={{ top: 'medium' }}
                  fill={true}
                >
                  {aboutText}
                </Box>
              </Tab>
            )}
            {renderLinksTab(externalUrls)}
          </Tabs>
        </Box>
      )}
    </Box>
  )
}

// TODO: improve this. It's a bit sloppy, repetitive and uses magic numbers
export const ArtistUIPlaceholder: FC = () => (
  <Box fill pad="medium" align="center">
    <Box flex="grow" width={{ max: 'small' }} height="small">
      <UserIcon size="100%" />
    </Box>
    <Heading textAlign="center">
      <LoadingBox width="medium" height="48px" />
    </Heading>
    <Box fill>
      <Tabs>
        <Tab title={<LoadingBox width="xxsmall" height="18px" />}>
          <Box
            background="white"
            pad="medium"
            round="medium"
            margin={{ top: 'medium' }}
            fill={true}
          >
            <LoadingBox width="100%" height="20px" />
            <LoadingBox width="100%" height="20px" margin={{ top: 'xsmall' }} />
            <LoadingBox width="100%" height="20px" margin={{ top: 'xsmall' }} />
            <LoadingBox width="100%" height="20px" margin={{ top: 'xsmall' }} />
            <LoadingBox width="100%" height="20px" margin={{ top: 'xsmall' }} />
          </Box>
        </Tab>
        <Tab title={<LoadingBox width="xxsmall" height="18px" />} />
      </Tabs>
    </Box>
  </Box>
)

export default ArtistUI
