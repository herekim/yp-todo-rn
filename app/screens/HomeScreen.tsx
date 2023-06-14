import React from 'react'

import { StyleSheet, View } from 'react-native'

import TodoInput from '../components/TodoInput/TodoInput'
import TodoList from '../components/TodoList/TodoList'

type Todo = {
  id: number
  content: string
  completed: boolean
}

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <TodoInput />
      <TodoList todos={TODOS} />
    </View>
  )
}

export default HomeScreen

const TODOS: Todo[] = [
  { id: 1, content: '할 일 1', completed: false },
  { id: 2, content: '할 일 2', completed: true },
  { id: 3, content: '할 일 3', completed: false },
  { id: 4, content: '할 일 4', completed: false },
  { id: 5, content: '할 일 5', completed: false },
]

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
})
