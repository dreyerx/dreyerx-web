import { Box, Flex, Heading, Image, Link, LinkBox, LinkOverlay, ListItem, Text } from '@chakra-ui/react'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import FooterData from "@/data/footer.json"
import { faGithub, faMedium, faTelegram } from '@fortawesome/free-brands-svg-icons'
import { faX } from '@fortawesome/free-solid-svg-icons'

const iconDefinition = {
  "telegram": faTelegram,
  "github": faGithub,
  "medium": faMedium,
  "x": faX
} as const

type IconKeys = keyof typeof iconDefinition;

async function getLastestVersion() {
  const response = await fetch('https://raw.githubusercontent.com/dreyerx/dreyerx-web/main/package.json', {
    headers: {
      "Accept": "application/vnd.github+json"
    }
  })
  const response_json = await response.json()
  return response_json['version']
} 

function FooterLink(props: { name: string, url: string }) {
  return <Link key={props.name} href={props.url}>{props.name}</Link>
}

function FooterLinkIcon(props: { icon: IconKeys, url: string }) {
  return (
    <LinkBox key={props.icon}>
      <LinkOverlay href={props.url}>
        <FontAwesomeIcon size='xl' icon={iconDefinition[props.icon]} />
      </LinkOverlay>
    </LinkBox>
  )
}

function FooterLinkRender(props: { data: Array<{ title: string, links: Array<{ name?: string, url: string, icon?: string }> }> }) {
  return props.data.map((footer) => {
    return (
      <Flex gap={3} flexDirection={'column'} key={footer.title}>
        <Heading size={'sm'} mb={3} textTransform={'uppercase'}>
          {footer.title}
        </Heading>

        {
          footer.links.map((link) => {
            if (typeof link.icon === "undefined" && typeof link.name === "string") {
              return FooterLink({ name: link.name, url: link.url })
            } else if (typeof link.icon == "string") {
              return FooterLinkIcon({ icon: link.icon as IconKeys, url: link.url })
            }
          })
        }
      </Flex>
    )
  })
}

export default function FooterSection() {
  const [gitLatestVersion, setGitLatestVersion ] = useState()

  useEffect(() => {
    (async() => {
      const gitLatestVersion_response = await getLastestVersion()

      setGitLatestVersion(gitLatestVersion_response)
    })()
  }, [gitLatestVersion])

  return (
    <Flex width={'full'} flexDirection={'column'} bgColor={'footer'} p={[10, '60px']} bottom={0} py={20}>
      <Box mx={[0, 20]}>
        <Flex align={'start'} justify={'space-between'} flexDirection={['column', 'row']} gap={[10, 0]}>
          <Flex flexDirection={['column', 'column']} w={['full', '500px']} gap={5}>
            <Image src='assets/images/dreyerx-typograph.png' width={'200px'} alt='DreyerX Logo' />
            <Text>
              Empowering transactions with speed and security on our POA-powered Layer 1 blockchain project
            </Text>
          </Flex>
          <Flex gap={[10, 90]} flexDirection={['column', 'row']}>
            {
              FooterLinkRender({ data: FooterData.data })
            }
          </Flex>
        </Flex>
        <Text textAlign={'end'} mt={'60px'}>Copyright &copy; 2024 DreyerX - v{ gitLatestVersion }</Text>
      </Box>
    </Flex>
  )
}
