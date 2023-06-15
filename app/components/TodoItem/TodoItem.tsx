import React from 'react'

import TodoItemView from './VTodoItem'

import { useDispatch } from 'react-redux'
import { deleteTodoStart } from '../../store/slices/todoSlice'

import { Todo } from '../../shared/types'

type TodoItemProps = {
  todo: Todo
}

function TodoItem({ todo }: TodoItemProps) {
  const dispatch = useDispatch()

  const onPress = (id: number) => {
    console.log('onPress', id)
  }

  const onDelete = (id: number) => {
    dispatch(deleteTodoStart(id))
  }

  const props = {
    todo,
    onPress,
    onDelete,
  }

  return <TodoItemView {...props} />
}

export default TodoItem
