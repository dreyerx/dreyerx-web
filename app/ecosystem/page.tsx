'use client'
import Header from '@/components/Header'
import FooterSection from '@/components/section/FooterSection'
import { EcosystemData } from '@/data/ecosystem'
import { Button, Flex, Heading, Input, Text } from '@chakra-ui/react'
import { faArrowDown, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function Page() {
    return (
        <>
            <Header />
            <Flex
                flexDirection={'column'}
                my={5}
                w={'full'}
                gap={'30px'}
                justify={'center'}
                align={'center'}
                h={'100vh'}
                px={[10, 0, '165px']}
                py={[20, 0, 0]}
            >
                <Heading size={'2xl'} w={600} textAlign={'center'}>
                    Comming Soon Page
                </Heading>
                {/* <Text>
                    Discover all the apps and projects in the DreyerX ecosystem.
                </Text>
                <Button
                    p={7}
                    bgColor={'primary'}
                >
                    <Flex gap={3} align={'center'} justify={'center'} h={'full'}>
                        <Text>
                            Submit your project
                        </Text>
                        <FontAwesomeIcon icon={faArrowRight} />
                    </Flex>
                </Button>

                <Flex w={'full'} gap={300} mt={100}>
                    <Input
                        bgColor={'card'}
                        placeholder='Search for projects'
                        p={7}
                        borderColor={'white10'}
                    />

                    <Flex gap={2}>
                        <Flex w={'full'} gap={3} cursor={'pointer'} bgColor={'card'} justify={'center'} align={'center'} p={3} px={5} borderRadius={5}>
                            <Text size={'sm'}>
                                MAINNET
                            </Text>
                            <FontAwesomeIcon icon={faArrowDown} />
                        </Flex>

                        <Flex gap={3} w={'full'} cursor={'pointer'} bgColor={'card'} justify={'center'} align={'center'} p={3} px={5} borderRadius={5}>
                            <Text size={'sm'}>
                                ALL CATEGORIES
                            </Text>
                            <FontAwesomeIcon icon={faArrowDown} />
                        </Flex>
                    </Flex>
                </Flex> */}
            </Flex>
            <FooterSection />
        </>
    )
}
