import { Button, Flex, Heading, Text } from '@chakra-ui/react'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function CallToAction() {
    return (
        <Flex gap={['20px', '50px']} flexDirection={['column', 'row']} >
            <Flex bg={'card60'} borderWidth={1} borderColor={'white10'} width={[340, 400]} p={7} borderRadius={20} cursor={'pointer'} justify={'space-between'} align={'center'} gap={2} _hover={{
                '& .icon': {
                    transition: 'all .5s ease-in-out',
                    transform: 'translateX(3px)'
                }
            }}>
                <Flex flexDirection={"column"} gap={'20px'}>
                    <Heading size={'sm'}>Bridge to DreyerX</Heading>
                    <Text>Bridge your assets to DreyerX</Text>
                </Flex>
                <Button bgColor={'primary'} _hover={{ bgColor: 'hover.primary' }} className='icon' rounded={100}>
                    <FontAwesomeIcon icon={faArrowRight} />
                </Button>
            </Flex>
            <Flex bg={'card60'} borderWidth={1} borderColor={'white10'} width={[340, 400]} p={7} borderRadius={20} cursor={'pointer'} justify={'space-between'} align={'center'} gap={2} _hover={{
                '& .icon': {
                    transition: 'all .5s ease-in-out',
                    transform: 'translateX(3px)'
                }
            }}>
                <Flex flexDirection={"column"} gap={'20px'}>
                    <Heading size={'sm'}>Build with DreyerX</Heading>
                    <Text>Get access to our documents, and start building</Text>
                </Flex>
                <Button bgColor={'primary'} _hover={{ bgColor: 'hover.primary' }} rounded={100} className='icon'>
                    <FontAwesomeIcon icon={faArrowRight} />
                </Button>
            </Flex>
        </Flex>
    )
}
