import React, { useState, useEffect } from 'react'
import { VStack, Heading, IconButton, useColorMode } from '@chakra-ui/react'
import AddTodo from '../components/Todos/AddTodo'
import TodoList from '../components/Todos/TodoList'
import { FaSun, FaMoon } from "react-icons/fa";



export default function Todo() {
    const [todos, setTodos] = useState([])
    const { colorMode, toggleColorMode } = useColorMode()


    const handleAddTodo = (newTodo) => {
        setTodos(todos.concat(newTodo))
    }

    const handleDeleteTodo = (id) => {
        const newTodos = todos.filter(todo => todo.id !== id)
        setTodos(newTodos)
    }



    return (
        <VStack p={8} h='100vh'>
            <IconButton
                aria-label="Sun"
                icon={colorMode === 'dark' ? <FaSun /> : <FaMoon />}
                size="lg"
                isRound={true}
                alignSelf="flex-end"
                onClick={toggleColorMode}
            />
            <Heading
                mb="8"
                fontWeight="extrabold"
                size="2xl"
                bgGradient='linear(to-r, pink.500, pink.300, blue.300)'
                bgClip="text"
            >
                Todo Application
            </Heading>
            <TodoList todos={todos} handleDeleteTodo={handleDeleteTodo} />
            <AddTodo handleAddTodo={handleAddTodo} />
        </VStack >
    )
}
