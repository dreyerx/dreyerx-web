import { Box, Button, Collapse, Divider, Fade, Flex, Heading, Image, Link, LinkBox, LinkOverlay, Slide, Text } from '@chakra-ui/react'
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

export default function Header() {
  const [isActiveBar, setIsActiveBar] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    if (isActiveBar) {
      document.body.classList.add('no-scroll')
    } else {
      document.body.classList.remove('no-scroll')
    }
  }, [isActiveBar])

  return (
    <>
      <Flex bgColor={'bg'} p={[5, 0, 5]} px={[10, 10, 20]} borderBottomWidth={1} borderColor={'white40'} width={'full'} borderBottomRadius={10} position={'fixed'} top={0} zIndex={100}>
        <Flex justify={'space-between'} align={'center'} w={'full'} mx={[0, 0, 20]}>
          <LinkBox>
            <LinkOverlay href='/'>
              <Image src='assets/images/LogoOnlyPNG.png' width={['30px', '40px', '40px']} alt='Logo Only' />
            </LinkOverlay>
          </LinkBox>

          <Button onClick={() => setIsActiveBar(!isActiveBar)} display={['block', 'none', 'none']} bgColor={'card'} color={'text'} _hover={{ bgColor: 'card' }}>
            <FontAwesomeIcon icon={isActiveBar ? faClose : faBars} />
          </Button>

          <Flex gap={'40px'} display={['none', 'flex', 'flex']}>
            <Link href='/' color={pathname == '/' ? 'text' : 'text95'} transition={'all .3s ease-in-out'} _hover={{
              color: 'white'
            }}>Home</Link>
            <Link href='/ecosystem' color={pathname == '/ecosystem' ? 'text' : 'text95'} transition={'all .3s ease-in-out'} _hover={{
              color: 'white'
            }}>Ecosystem</Link>
            <Link href='https://docs.dreyerx.com/architecrure/tokenomics' color={pathname == '/tokenmonics' ? 'text' : 'text95'} transition={'all .3s ease-in-out'} _hover={{
              color: 'white'
            }}>Tokenmonics</Link>
            <Link href='/#roadmap' color={pathname == '/roadmap' ? 'text' : 'text95'} transition={'all .3s ease-in-out'} _hover={{
              color: 'white'
            }}>Roadmap</Link>
          </Flex>

          <Link href='https://docs.dreyerx.com' bgColor={'primary'} display={['none', 'none', 'block']} size={'md'} p={2} px={3} borderRadius={5} fontWeight={'bold'} fontSize={15} transition={'.5s ease-in-out'} _hover={{ textDecoration: 'none', bgColor: 'hover.primary' }}>
            Use DreyerX
          </Link>
        </Flex>
      </Flex>

      <Box w={'full'} h={'full'} display={['block', 'none']} zIndex={1000}>
        <Fade in={isActiveBar}>
          <Flex display={[isActiveBar ? 'block' : 'none', 'none']} h={'100%'} flexDirection={"column"} position={'fixed'} w={'full'} top={20} p={7} bgColor={'bg'} backdropFilter={'blur(5px)'} borderRadius={10} zIndex={99}>
            <Box bgColor={'primary'} w={'full'} h={'200'} position={'absolute'} filter={'blur(50px)'} opacity={.2}>

            </Box>
            <Heading size={'sm'} mt={5}>Use DreyerX</Heading>

            <Flex flexDirection={"column"} mt={7} gap={4}>
              <Link href='/' color={'text'}>Home</Link>
              <Divider />
              <Link href='/ecosystem'>Ecosystem</Link>
              <Divider />
              <Link href='https://docs.dreyerx.com/architecrure/tokenomics'>Tokenmonics</Link>
              <Divider />
              <Link href='#roadmap'>Roadmap</Link>

              <Link href='https://docs.dreyerx.com' bgColor={'primary'} mt={5} size={'md'} p={2} px={3} borderRadius={5} textAlign={'center'} fontWeight={'bold'} fontSize={15} transition={'.5s ease-in-out'} _hover={{ textDecoration: 'none', bgColor: 'hover.primary' }}>
                Use DreyerX
              </Link>
            </Flex>
          </Flex>
        </Fade>
      </Box>

      <style jsx global>{`
        .no-scroll {
          overflow: hidden;
        }
      `}</style>
    </>
  )
}
