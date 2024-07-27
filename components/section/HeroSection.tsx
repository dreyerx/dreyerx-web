import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import TypingText from '../TypingText'
import CallToAction from '../CallToAction'

export default function HeroAction() {
    return (
        <Flex height={'100vh'} justify={'center'} align={'center'} backgroundImage={'url("assets/images/dreyerx-hero-bg.svg")'} backgroundSize={'cover'} backgroundRepeat={'no-repeat'}>
            <Flex flexDirection={'column'} gap={50} align={'center'}>
                <Flex gap={10} justify={'center'} align={'center'}>
                    <Heading textAlign={'center'} fontSize={'80px'} color={'primary'}>Dreyer X</Heading>
                    <Heading textAlign={'center'} fontSize={'80px'}> Network</Heading>
                </Flex>
                <Text textAlign={'center'} maxWidth={500}>
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
