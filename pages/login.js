import React from 'react'
import { Flex, Heading, Button, Input, useColorMode } from '@chakra-ui/react'

export default function login() {
    const { colorMode, toggleColorMode } = useColorMode()
    const bgColor = { light: 'gray.300', dark: 'gray.600' };


    return (
        <Flex h='100vh' justifyContent="center" alignItems='center'>
            <Flex bg={bgColor[colorMode]} rounded={6} flexDir="column" p={12} >
                <Heading mb={5}>Login</Heading>
                <Input type="text" placeholder="rechielagria@gmail.com" mb={3} />
                <Input type="password" placeholder="*******" mb={3} />
                <Button colorScheme="teal" mb={3}>Login</Button>
                <Button onClick={toggleColorMode}>Toggle</Button>
            </Flex>
        </Flex>
    )
}
