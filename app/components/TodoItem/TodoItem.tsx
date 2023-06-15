import React from 'react'

import TodoItemView from './VTodoItem'

import { useDispatch } from 'react-redux'
import { deleteTodoStart } from '../../store/slices/todoSlice'

import { Todo } from '../../shared/types'

type TodoItemProps = {
  todo: Todo
  onToggle: (id: number) => void
}

function TodoItem(props: TodoItemProps) {
  const dispatch = useDispatch()

  const onDelete = (id: number) => {
    dispatch(deleteTodoStart(id))
  }
  return <TodoItemView {...props} onDelete={onDelete} />
}

export default TodoItem
