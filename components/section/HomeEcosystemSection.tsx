import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'

export default function HomeEcosystemSection() {
    return (
        <Flex
            w={'full'}
            flexDirection={'column'}
            align={'center'}
            h={['full', '100vh']}
            px={[10, 0, '165px']}
            gap={30}
            py={['100px', 0, 0]}
            justifyContent={'center'}
            backgroundImage={'url("assets/images/ecosystem-icons.svg")'}
            backgroundPosition={['top -90px center', 'top -200px center']}
            backgroundRepeat={'no-repeat'}
            backgroundSize={['100%', '60%']}
            backgroundBlendMode={'screen'}
        >
            <Box position={'absolute'} w={'70%'} h={700} bgColor={'primary'} zIndex={-1} filter={'blur(100px)'} rounded={360} opacity={.2}>

            </Box>
            <Box mx={[10, 425]}>
                <Heading textAlign={'center'} as="h2" size="xl" mb="4" color="primary">
                    Join Our Ecosystem?
                </Heading>
                <Text fontSize="lg" mb={'20px'} textAlign={'center'}>
With innovative solutions in blockchain technology and a vibrant, global developer community, there's never been a better time to start building on DreyerX.                </Text>
            </Box>

            <Flex gap={5} flexDirection={['column', 'row']}>
                <Flex flexDirection={'column'} w={'100%'} bgColor={'card60'} p={30} borderRadius={20} gap={3} borderWidth={1} borderColor={'white10'}>
                    <Heading size={'sm'}>FOR EVERYONE</Heading>
                    <Heading>20+ dApps</Heading>

                </Flex>
                <Flex flexDirection={'column'} w={'100%'} bgColor={'card60'} p={30} borderRadius={20} gap={3} borderWidth={1} borderColor={'white10'}>
                    <Heading size={'sm'}>FOR DEVELOPERS</Heading>
                    <Heading>100+ Developers</Heading>
                </Flex>
            </Flex>
        </Flex>
    )
}
