'use client'
import Header from '@/components/Header'
import FooterSection from '@/components/FooterSection'
import { EcosystemData } from '@/data/ecosystem'
import { EcosystemProps } from '@/libs/defineEcosystem'
import { Avatar, Badge, Button, Flex, Heading, Input, LinkBox, LinkOverlay, Select, Text, useToken } from '@chakra-ui/react'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'

export default function Page() {
    const [text] = useToken("colors", "text")
    const [ecosystems, setEcosystems] = useState<EcosystemProps[]>([])

    const [query, setQuery] = useState("")

    useEffect(() => {
        const ecosystemData = EcosystemData.filter((v) => v.name.toLowerCase().includes(query.toLowerCase()) || v.description.toLowerCase().includes(query.toLowerCase()))
        setEcosystems(ecosystemData)
    }, [query])

    return (
        <>
            <Header />
            <Flex
                flexDirection={'column'}
                my={5}
                w={'full'}
                gap={'30px'}
                align={'center'}
                px={[10, 0, '165px']}
                py={[50, 0, 10]}
                mt={200}
            >
                <Heading size={'2xl'} w={[300, 600]} textAlign={'center'}>
                    Explore the DreyerX Ecosystem
                </Heading>
                <Text>
                    Discover all the apps and projects in the DreyerX ecosystem.
                </Text>
                <Button
                    p={7}
                    bgColor={'primary'}
                    transition={'all .5s ease-in-out'}
                    _hover={{
                        bgColor: 'hover.primary'
                    }}
                >
                    <Flex gap={3} align={'center'} justify={'center'} h={'full'}>
                        <Text color={'text'}>
                            Submit your project
                        </Text>
                        <FontAwesomeIcon color={text} icon={faArrowRight} />
                    </Flex>
                </Button>

                <Flex w={'full'} flexDirection={['column-reverse', 'row']} gap={[3, 3]} mt={100}>
                    <Input
                        bgColor={'card'}
                        placeholder='Search for projects'
                        p={7}
                        borderColor={'white10'}
                        color={'text'}
                        value={query}
                        onChange={(v) => setQuery(v.target.value)}
                        _hover={{
                            borderColor: 'white40'
                        }}
                        _focusVisible={{
                            borderColor: 'white40'
                        }}
                    />

                    <Flex gap={2} flexDirection={['column', 'row']} w={'full'}>
                        <Select
                            bgColor={'card'}
                            borderColor={'white10'}
                            _hover={{
                                borderColor: 'white40'
                            }}
                            _focusVisible={{
                                borderColor: 'white40'
                            }}
                            h={'60px'}
                            w={'full'}
                            sx={{
                                option: {
                                    bg: 'card', // Background default option
                                    color: 'text',
                                    _hover: {
                                        bg: 'primary', // Background saat hover
                                    },
                                    _checked: {
                                        bg: 'primary', // Background saat dipilih
                                    },
                                },
                            }}
                        >
                            <option defaultValue="all" selected>All</option>
                            <option defaultValue="mainnet">Mainnet</option>
                            <option defaultValue="testnet">Testnet</option>
                        </Select>
                        <Select
                            bgColor={'card'}
                            borderColor={'white10'}
                            _hover={{
                                borderColor: 'white40'
                            }}
                            _focusVisible={{
                                borderColor: 'white40'
                            }}
                            h={'60px'}
                            w={'full'}
                            sx={{
                                option: {
                                    bg: 'card', // Background default option
                                    color: 'text',
                                    _hover: {
                                        bg: 'primary', // Background saat hover
                                    },
                                    _checked: {
                                        bg: 'primary', // Background saat dipilih
                                    },
                                },
                            }}
                        >
                            <option defaultValue="all" selected>All</option>
                            <option defaultValue="dex">DEX</option>
                        </Select>
                    </Flex>
                </Flex>

                <Flex flexDirection={['column', 'row']} width={'full'} justifyContent={'start'} gap={2}>
                    {
                        ecosystems.map((ecosystem) => {
                            return (
                                <LinkBox
                                    w={'full'}
                                    h={'full'}
                                    flexBasis={'25%'}
                                    flexWrap={'wrap'}
                                    flexDirection={'column'}
                                    key={ecosystem.name}
                                    transition={'all ease-in-out .5s'}
                                    _hover={{
                                        transform: 'translateY(-5px)'
                                    }}
                                >
                                    <LinkOverlay
                                        href={ecosystem.url}
                                    >
                                        <Flex
                                            p={5}
                                            borderRadius={5}
                                            bgColor={'card'}
                                            flexDirection={'column'}
                                            borderWidth={1}
                                            borderColor={'white20'}
                                            gap={5}
                                        >
                                            <Flex gap={4} align={'center'} justifyContent={'start'}>
                                                <Avatar src={ecosystem.image} />
                                                <Flex flexDirection={'column'} gap={1}>
                                                    <Heading size={'md'}>{ecosystem.name}</Heading>
                                                    <Badge colorScheme='green' p={1} pl={2}>{ecosystem.category}</Badge>
                                                </Flex>
                                            </Flex>
                                            <Text>
                                                {ecosystem.description}
                                            </Text>
                                        </Flex>
                                    </LinkOverlay>
                                </LinkBox>
                            )
                        })
                    }
                </Flex>
            </Flex>
            <FooterSection />
        </>
    )
}
