import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react'
import { faEthereum } from '@fortawesome/free-brands-svg-icons'
import { faNetworkWired } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function GettingStartedSection() {
  return (
    <Flex
      w={'full'}
      h={'full'}
      bgColor={'bg'}
      px={[10, '30px', '165px']}
      py={['100px', 0, '100px']}
    >
      <Flex
        bgImage={"url('assets/images/background-bloom2.svg')"}
        bgRepeat={'no-repeat'}
        bgSize={'cover'}
        bgPos={'center'}
        bgBlendMode={'darken'}
        w={'full'}
        h={'full'}
        borderWidth={1}
        borderColor={'white10'}
        p={'100px'}
        flexDirection={'column'}
        borderRadius={20}
        gap={'200px'}
      >
        <Flex justify={'space-between'} align={'end'} w={'full'}>
          <Heading color={'text'} w={'400px'} size={'2xl'}>
            Getting Started with DreyerX
          </Heading>
          <Button bgColor={'primary'} p={5}>
            Start Building
          </Button>
        </Flex>
        <Flex gap={10}>
          <Flex flexDirection={'column'} flexBasis={'50%'} gap={5}>
            <Flex bgColor={'primary'} w={'40px'} h={'40px'} justify={'center'} align={'center'} borderRadius={5}>
              <FontAwesomeIcon icon={faEthereum} size='xl' />
            </Flex>
            <Heading size={'md'}>Bridge Your ETH</Heading>
            <Text>
              You can move your ETH to DreyerX using our bridge or another bridge. Check the user guide for steps.
            </Text>
          </Flex>

          <Flex flexDirection={'column'} flexBasis={'50%'} gap={5}>
            <Flex bgColor={'primary'} w={'40px'} h={'40px'} justify={'center'} align={'center'} borderRadius={5}>
              <FontAwesomeIcon icon={faNetworkWired} size='lg' />
            </Flex>
            <Heading size={'md'}>Change RPC provider</Heading>
            <Text>
              To use DreyerX with your Ethereum tools, just set them to use a DreyerX RPC Provider.
            </Text>
          </Flex>

          <Flex flexDirection={'column'} flexBasis={'50%'} gap={5}>
            <Flex bgColor={'primary'} w={'40px'} h={'40px'} justify={'center'} align={'center'} borderRadius={5}>
              <FontAwesomeIcon icon={faEthereum} size='xl' />
            </Flex>
            <Heading size={'md'}>Start Building</Heading>
            <Text>
              Start building with the tools you already like to use.
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}
