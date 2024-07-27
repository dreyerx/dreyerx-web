import { Box, Button, Flex, Image, Link } from '@chakra-ui/react'
import React from 'react'

export default function Header() {
  return (
    <Flex bgColor={'bg'} p={5} px={20} shadow={'md'} width={'full'} borderRadius={10} position={'fixed'} top={0} zIndex={100}>
      <Flex justify={'space-between'} align={'center'} w={'full'} mx={20}>
        <Image src='assets/images/LogoOnlyPNG.png' width={'40px'} alt='Logo Only' />

        <Flex gap={5}>
          <Link href='#' color={'text'}>Home</Link>
          <Link href='#'>Ecosystem</Link>
          <Link href='#'>Tokenmonics</Link>
          <Link href='#'>Roadmap</Link>
        </Flex>

        <Link bgColor={'primary'} size={'md'} p={2} px={3} borderRadius={5} fontWeight={'bold'} fontSize={15} transition={'.5s ease-in-out'} _hover={{ textDecoration: 'none', bgColor: 'hover.primary' }}>
          Use DreyerX
        </Link>
      </Flex>
    </Flex>
  )
}
