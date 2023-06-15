import React from 'react'

import { StyleSheet, View } from 'react-native'

import TodoModalTrigger from '../components/TodoModalTrigger/TodoModalTrigger'
import TodoList from '../components/TodoList/TodoList'

type Todo = {
  id: number
  content: string
  completed: boolean
}

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <TodoList todos={TODOS} />
      <TodoModalTrigger />
    </View>
  )
}

export default HomeScreen

const TODOS: Todo[] = [
  { id: 1, content: '웨이트 1시간', completed: false },
  { id: 2, content: '영어공부 30분', completed: true },
  { id: 3, content: 'React Native 공부', completed: false },
  { id: 4, content: 'Todo List 앱 만들기', completed: false },
  { id: 5, content: '알고리즘 공부', completed: false },
  { id: 6, content: '웨이트 1시간', completed: false },
  { id: 7, content: '영어공부 30분', completed: true },
  { id: 8, content: 'React Native 공부', completed: false },
  { id: 9, content: 'Todo List 앱 만들기', completed: false },
  { id: 10, content: '알고리즘 공부', completed: false },
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
