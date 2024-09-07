import { Button, Divider, Flex, Heading, List, ListIcon, ListItem, Text } from '@chakra-ui/react'
import { faCheckDouble } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import RoadmapData from "@/data/roadmap.json"

interface RoadmapItemProps {
    title: string;
    phase: string;
    roads: Array<string>
}

function RoadmapItem(props: RoadmapItemProps) {
    return (
        <Flex
            bg={'card60'}
            p={10}
            borderWidth={1}
            borderColor={'white10'}
            backdropFilter={'blur(20px)'}
            borderRadius={20}
            flexDirection={'column'}
            gap={3}
            flexBasis={'50%'}
            cursor={'pointer'}
            transition={'all .5s ease-in-out'}
            _hover={{
                transform: ['translateY(-5px)', 'translateY(-20px)'],
                borderColor: 'white20'
            }}
        >
            <Heading size={'sm'} opacity={.9}>Phase {props.phase}</Heading>
            <Heading size={'md'}>{props.title}</Heading>
            <Divider color={'white10'} />
            <Flex flexDirection={'column'} gap={3}>
                {
                    props.roads.map((road, index) => {
                        return (
                            <Flex gap={2} align={'center'} key={`roadmap-data-${index}`}>
                                <FontAwesomeIcon icon={faCheckDouble} />
                                <Text>
                                    {road}
                                </Text>
                            </Flex>
                        )
                    })
                }
            </Flex>
        </Flex>
    )
}

export default function RoadmapSection() {
    return (
        <Flex
            w={'full'}
            flexDirection={'column'}
            bgColor={'bg'}
            align="center"
            height={['full', '100vh']}
            px={[10, 0, '165px']}
            gap={'60px'}
            py={[20, 0, 0]}
            justifyContent={'center'}
            backgroundImage={'url("assets/images/dreyerx-hero-bg2.svg")'}
            backgroundPosition={['bottom -400px center']}
            backgroundRepeat={'no-repeat'}
            backgroundSize={'cover'}
        >
            <Flex flexDirection={'column'} alignItems={'center'} mb={10}>
                <Heading size={'xl'} mb={4}>Roadmap</Heading>
                <Text fontSize={'lg'} textAlign={'center'} maxW={'600px'}>
                    Here is the development roadmap for DreyerX, divided into four phases. This roadmap outlines the steps DreyerX will take in the near future to achieve its long-term goals and vision.
                </Text>
            </Flex>

            <Flex flexDirection={['column', 'row']} gap={'20px'}>
                {
                    RoadmapData.data.map((v, index) => {
                        return (
                            <RoadmapItem
                                key={`roadmap-index-${index}`}
                                title={v.title}
                                phase={v.phase}
                                roads={v.roads}
                            />
                        )
                    })
                }
            </Flex>
        </Flex>
    )
}
