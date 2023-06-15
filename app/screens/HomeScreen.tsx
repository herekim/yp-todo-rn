import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { StyleSheet, View, Text } from 'react-native'

import TodoModalTrigger from '../components/TodoModalTrigger/TodoModalTrigger'
import TodoList from '../components/TodoList/TodoList'

import { getTodosStart } from '../store/slices/todoSlice'

import { RootState } from '../store'

import { Todo } from '../shared/types'

const HomeScreen = () => {
  const dispatch = useDispatch()
  const { todos } = useSelector((state: RootState) => state.todo)

  useEffect(() => {
    dispatch(getTodosStart())
  }, [dispatch])

  return (
    <View style={styles.container}>
      {todos.length > 0 ? (
        <TodoList todos={todos} />
      ) : (
        <Text>할 일이 없어요!</Text>
      )}
      <TodoModalTrigger />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
})

const TODOS: Todo[] = [
  {
    id: 1,
    content: '웨이트 1시간',
    completed: false,
    updated_at: '2021-08-01',
    created_at: '2021-08-01',
  },
  {
    id: 2,
    content: '영어공부 30분',
    completed: true,
    updated_at: '2021-08-01',
    created_at: '2021-08-01',
  },
  {
    id: 3,
    content: 'React Native 공부',
    completed: false,
    updated_at: '2021-08-01',
    created_at: '2021-08-01',
  },
  {
    id: 4,
    content: 'Todo List 앱 만들기',
    completed: false,
    updated_at: '2021-08-01',
    created_at: '2021-08-01',
  },
  {
    id: 5,
    content: '알고리즘 공부',
    completed: false,
    updated_at: '2021-08-01',
    created_at: '2021-08-01',
  },
  {
    id: 6,
    content: '웨이트 1시간',
    completed: false,
    updated_at: '2021-08-01',
    created_at: '2021-08-01',
  },
  {
    id: 7,
    content: '영어공부 30분',
    completed: true,
    updated_at: '2021-08-01',
    created_at: '2021-08-01',
  },
  {
    id: 8,
    content: 'React Native 공부',
    completed: false,
    updated_at: '2021-08-01',
    created_at: '2021-08-01',
  },
  {
    id: 9,
    content: 'Todo List 앱 만들기',
    completed: false,
    updated_at: '2021-08-01',
    created_at: '2021-08-01',
  },
  {
    id: 10,
    content: '알고리즘 공부',
    completed: false,
    updated_at: '2021-08-01',
    created_at: '2021-08-01',
  },
]
