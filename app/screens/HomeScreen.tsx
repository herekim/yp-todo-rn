import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { StyleSheet, View, Text, ScrollView } from 'react-native'

import TodoModalTrigger from '../components/TodoModalTrigger/TodoModalTrigger'
import TodoList from '../components/TodoList/TodoList'
import TodoModal from '../components/TodoModal/TodoModal'
import OptionModal from '../components/Modal/OptionModal'

import { getTodosStart } from '../store/slices/todoSlice'

import { RootState } from '../store'

const HomeScreen = () => {
  const dispatch = useDispatch()
  const { todos } = useSelector((state: RootState) => state.todo)

  useEffect(() => {
    dispatch(getTodosStart())
  }, [dispatch])

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 28, fontWeight: '800', marginBottom: 30 }}>
        안녕하세요. 좋은 아침.
      </Text>
      {todos.length > 0 ? (
        <TodoList todos={todos} />
      ) : (
        <Text>할 일이 없어요!</Text>
      )}
      <TodoModalTrigger />
      <TodoModal />
      <OptionModal />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 30,
  },
})
