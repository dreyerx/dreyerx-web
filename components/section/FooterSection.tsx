import { Box, Flex, Heading, Image, Link, ListItem, Text } from '@chakra-ui/react'
import { faGithub, faMedium, faTelegram } from '@fortawesome/free-brands-svg-icons'
import { faX } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function FooterSection() {
  return (
    <Flex width={'full'} flexDirection={'column'} bgColor={'footer'} p={'60px'} bottom={0}>
      <Box mx={20}>
        <Flex align={'start'} justify={'space-between'} >
          <Image src='assets/images/dreyerx-typograph.png' width={'200px'} alt='DreyerX Logo' />
          <Flex gap={3} flexDirection={'column'}>
            <Heading size={'sm'} mb={3} textTransform={'uppercase'}>
              Explore
            </Heading>
            <Link>
              Getting Started
            </Link>
            <Link>
              Staking
            </Link>
            <Link>
              Bridge
            </Link>
            <Link>
              Swap (Comming Soon)
            </Link>
          </Flex>
          <Flex gap={3} flexDirection={'column'}>
            <Heading size={'sm'} mb={3} textTransform={'uppercase'}>
              EVM
            </Heading>
            <Link>
              Testnet
            </Link>
            <Link>
              Mainnet
            </Link>
          </Flex>
          <Flex gap={3} flexDirection={'column'}>
            <Heading size={'sm'} mb={3} textTransform={'uppercase'}>
              Build with DreyerX
            </Heading>
            <Link>
              Docs
            </Link>
            <Link>
              SDK (Comming Soon)
            </Link>
            <Link>
              Academy (Comming Soon)
            </Link>
          </Flex>
          <Flex gap={3} flexDirection={'column'}>
            <Heading size={'sm'} mb={3} textTransform={'uppercase'}>
              Community
            </Heading>
            <Flex gap={3}>
              <Link>
                <FontAwesomeIcon size='xl' icon={faTelegram} />
              </Link>
              <Link>
                <FontAwesomeIcon size='xl' icon={faGithub} />
              </Link>
              <Link>
                <FontAwesomeIcon size='xl' icon={faMedium} />
              </Link>
              <Link>
                <FontAwesomeIcon size='xl' icon={faX} />
              </Link>
            </Flex>
          </Flex>
        </Flex>
        <Text textAlign={'end'} mt={'60px'}>Copyright &copy; 2024 DreyerX</Text>
      </Box>
    </Flex>
  )
}
