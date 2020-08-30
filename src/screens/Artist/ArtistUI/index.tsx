import React, { FC } from 'react'
import { Box, Image, Heading, Tab, Tabs, Text, Anchor } from 'grommet'
import {
  Group as GroupIcon,
  User as UserIcon,
  Link as LinkIcon,
} from 'grommet-icons'

interface Props {
  name: string
  primaryImageUrl?: string
  isIndividual: boolean
  aboutText?: string
  externalUrls?: string[]
}

const ArtistUI: FC<Props> = ({
  name,
  primaryImageUrl,
  isIndividual,
  aboutText,
  externalUrls,
}: Props) => {
  const PlaceholderIcon = isIndividual ? UserIcon : GroupIcon

  const hasTabs = !!aboutText || !!(externalUrls && externalUrls.length)

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
            {externalUrls && externalUrls.length && (
              <Tab title="Links">
                <Box margin={{ top: 'medium' }} gap="medium">
                  {externalUrls.map(url => (
                    <Box
                      key={url}
                      background="white"
                      pad="medium"
                      gap="small"
                      round="medium"
                      direction="row"
                      align="center"
                    >
                      <Box
                        flex="grow"
                        width={{ max: 'xxsmall' }}
                        height="xxsmall"
                      >
                        <LinkIcon size="large" />
                      </Box>
                      <Text truncate={true}>
                        <Anchor href={url} target="_blank" label={url} />
                      </Text>
                    </Box>
                  ))}
                </Box>
              </Tab>
            )}
          </Tabs>
        </Box>
      )}
    </Box>
  )
}

export default ArtistUI
