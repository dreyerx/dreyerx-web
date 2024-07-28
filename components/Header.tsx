import { Box, Button, Divider, Flex, Heading, Image, Link, Text } from '@chakra-ui/react'
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'

export default function Header() {
  const [isActiveBar, setIsActiveBar] = useState(false)

  useEffect(() => {
    if (isActiveBar) {
      document.body.classList.add('no-scroll')
    } else {
      document.body.classList.remove('no-scroll')
    }
  }, [isActiveBar])

  return (
    <>
      <Flex bgColor={'bg'} p={[5, 0, 5]} px={[10, 0, 20]} shadow={'md'} width={'full'} borderRadius={10} position={'fixed'} top={0} zIndex={100}>
        <Flex justify={'space-between'} align={'center'} w={'full'} mx={[0, 0, 20]}>
          <Image src='assets/images/LogoOnlyPNG.png' width={['30px', '0px', '40px']} alt='Logo Only' />

          <Button onClick={() => setIsActiveBar(!isActiveBar)} display={['block', 'none', 'none']} bgColor={'card'} color={'text'}>
            <FontAwesomeIcon icon={isActiveBar ? faClose : faBars} />
          </Button>

          <Flex gap={5} display={['none', 'flex', 'flex']}>
            <Link href='#' color={'text'}>Home</Link>
            <Link href='#'>Ecosystem</Link>
            <Link href='#'>Tokenmonics</Link>
            <Link href='#'>Roadmap</Link>
          </Flex>

          <Link href='https://docs.dreyerx.com' bgColor={'primary'} display={['none', 'none', 'block']} size={'md'} p={2} px={3} borderRadius={5} fontWeight={'bold'} fontSize={15} transition={'.5s ease-in-out'} _hover={{ textDecoration: 'none', bgColor: 'hover.primary' }}>
            Use DreyerX
          </Link>
        </Flex>
      </Flex>
      <Flex display={[isActiveBar ? 'block' : 'none', 'none']} h={'100%'} flexDirection={"column"} position={'fixed'} w={'full'} top={20} p={7} bgColor={'bg'} backdropFilter={'blur(5px)'} borderRadius={10} zIndex={101}>
        <Box bgColor={'primary'} w={'full'} h={100} position={'absolute'} filter={'blur(50px)'} opacity={.5}>

        </Box>
        <Heading size={'sm'}>Use DreyerX</Heading>

        <Flex flexDirection={"column"} mt={7}  gap={4}>
          <Link href='#home' color={'text'}>Home</Link>
          <Divider />
          <Link href='#ecosystem'>Ecosystem</Link>
          <Divider />
          <Link href='#tokenmonics'>Tokenmonics</Link>
          <Divider />
          <Link href='#roadmap'>Roadmap</Link>

          <Link href='https://docs.dreyerx.com' bgColor={'primary'} mt={5} size={'md'} p={2} px={3} borderRadius={5} textAlign={'center'} fontWeight={'bold'} fontSize={15} transition={'.5s ease-in-out'} _hover={{ textDecoration: 'none', bgColor: 'hover.primary' }}>
            Use DreyerX
          </Link>
        </Flex>
      </Flex>

      <style jsx global>{`
        .no-scroll {
          overflow: hidden;
        }
      `}</style>
    </>
  )
}
