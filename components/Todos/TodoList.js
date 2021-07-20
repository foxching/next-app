import React from 'react'
import { Badge, HStack, IconButton, Spacer, StackDivider, Text, VStack, } from '@chakra-ui/react'
import { FaTrash } from 'react-icons/fa'


export default function TodoList({ todos, handleDeleteTodo }) {

    if (todos.length === 0) {
        return (
            <Badge colorScheme="green" mt={8} p="4" borderRadius="lg" >
                No todos found..
            </Badge >
        )
    }

    return (
        <VStack
            divider={<StackDivider />}
            borderColor="gray.100"
            borderWidth="2px"
            p="4"
            borderRadius="lg"
            w="100%"
            maxW={{ base: "90vw", sm: "80vw", lg: "50vw", xl: "40vw" }}
            alignItems="stretch"
        >
            {todos.map(todo => (
                <HStack key={todo.id}>
                    <Text>{todo.body}</Text>
                    <Spacer />
                    <IconButton aria-label="delete" icon={<FaTrash />} isRound={true} onClick={() => handleDeleteTodo(todo.id)} />
                </HStack>
            ))}
        </VStack>
    )
}
