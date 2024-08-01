import { Divider, Flex, Heading, List, ListIcon, ListItem, Text } from '@chakra-ui/react'
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
          bgColor={'card40'}
          p={10}
          borderWidth={1}
          borderColor={'white10'}
          backdropFilter={'blur(20px)'}
          borderRadius={20}
          flexDirection={'column'}
          gap={3}
      >
          <Heading size={'sm'}>{ props.title }</Heading>
          <Heading size={'lg'}>Phase { props.phase }</Heading>
          <Divider color={'white10'} />
          <Flex flexDirection={'column'} gap={3}>
              {
                props.roads.map((road) => {
                    return (
                        <Flex gap={2} align={'center'}>
                            <FontAwesomeIcon icon={faCheckDouble} />
                            <Text>
                                { road }
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
            flexDirection={['column', 'row']}
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
            {
                RoadmapData.data.map((v) => {
                    return (
                        <RoadmapItem 
                            title={v.title}
                            phase={v.phase}
                            roads={v.roads}
                        />
                    )
                })
            }
        </Flex>
    )
}
