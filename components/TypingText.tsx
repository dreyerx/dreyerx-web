import { Text } from '@chakra-ui/react'
import React, { useEffect, useRef } from 'react'
import Typed from 'typed.js'

export default function TypingText() {
    const element = useRef(null)

    useEffect(() => {
        const typed = new Typed(element.current, {
            strings: ["Connecting the world with DreyerX",
                "Secure and fast networking",
                "Innovative solutions for your business",
                "Join the future of networking",
                "Experience unparalleled connectivity"],
            typeSpeed: 50,
            backSpeed: 50,
            loop: true
        })

        return () => {
            typed.destroy()
        }
    }, [])

    return (
        <Text fontSize="md"
            color="text"
            fontWeight="bold"
            textAlign="center"
            >
            <span ref={element}></span>
        </Text>
    )
}
