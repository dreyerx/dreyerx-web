import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import React, { Ref } from 'react'
import TypingText from '../TypingText'
import CallToAction from '../CallToAction'

export default function HeroAction(props: { ref: any }) {
    return (
        <Flex height={['120vh', '100vh']} justify={'center'} align={'center'} backgroundImage={'url("assets/images/dreyerx-hero-bg.svg")'} backgroundSize={['cover', 'cover']} backgroundPosition={['bottom 0px center', '', '']} backgroundRepeat={'no-repeat'}>
            <Flex flexDirection={'column'} gap={['30px', 50]} align={'center'}>
                <Flex gap={[0, 10]} justify={'center'} align={'center'} flexDirection={['column', 'row']}>
                    <Heading textAlign={'center'} fontSize={['50px', '80px']} color={'primary'}>Dreyer X</Heading>
                    <Heading textAlign={'center'} fontSize={['50px', '80px']}>Network</Heading>
                </Flex>
                <Text textAlign={'center'} maxWidth={[300, 500]}>
                    Empowering transactions with speed and security on our POA-powered Layer 1 blockchain project
                </Text>
                <Box
                    p={3}
                    bg={'primary'}
                    borderRadius={20}
                >
                    <TypingText />
                </Box>
                <CallToAction />
            </Flex>

            <Box bgColor={'primary'} width={'full'} height={'100vh'} opacity={.2} position={'absolute'} rounded={'full'} filter={'blur(500px)'} top={0} left={0} zIndex={-1}>

            </Box>
        </Flex>
    )
}
