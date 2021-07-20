import { useRef } from 'react'
import { HStack, Input, Button, useToast } from '@chakra-ui/react'
import React from 'react'

export default function AddTodo({ handleAddTodo }) {
    const todoRef = useRef(null)
    const toast = useToast()

    const addTodo = (e) => {
        e.preventDefault()
        const newTodo = {
            body: todoRef.current.value,
            id: Math.round(Math.random() * 10)
        }

        if (todoRef.current.value === '') {
            toast({
                title: "Please enter a value",
                status: "error",
                duration: 1000,
                isClosable: true,
            })
            return
        }
        handleAddTodo(newTodo)
        todoRef.current.value = ''
    }
    return (
        <form onSubmit={addTodo}>
            <HStack mt='8'>
                <Input ref={todoRef} type="text" variant="filled" placeholder="Enter your todos..." />
                <Button colorScheme="pink" px={8} type="submit">Add Todo</Button>
            </HStack>
        </form>

    )
}
