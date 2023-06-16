import { useState } from 'react'

import VDetailScreen from './VDetailScreen'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigation } from '@react-navigation/native'

import { RootState } from '../../store'
import { updateTodoStart } from '../../store/slices/todoSlice'

import { useCompleted, useNote } from '../../shared/hooks'

import { NavigationProps } from '../../shared/types'

const DetailScreen = ({ route }) => {
  const { todoId } = route.params

  const dispatch = useDispatch()
  const navigation = useNavigation<NavigationProps>()

  const { completed, toggleCheckbox } = useCompleted(todoId)
  const { note, updateNote } = useNote(todoId)

  const todos = useSelector((state: RootState) => state.todo.todos)
  const todo = todos.find((todo) => todo.id === todoId)

  const [value, setValue] = useState(todo.content)

  const onUpdateButtonPress = () => {
    dispatch(updateTodoStart({ id: todo.id, content: value }))
    navigation.navigate('Home')
  }

  const props = {
    todo,
    value,
    setValue,
    note,
    updateNote,
    completed,
    toggleCheckbox,
    onUpdateButtonPress,
  }

  return <VDetailScreen {...props} />
}

export default DetailScreen
