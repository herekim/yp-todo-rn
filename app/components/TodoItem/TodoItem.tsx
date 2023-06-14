import React from 'react'

import TodoItemView from './VTodoItem'

type Todo = {
  id: number
  content: string
  completed: boolean
}

type TodoItemProps = {
  todo: Todo
  onToggle: (id: number) => void
}

function TodoItem({ todo, onToggle }: TodoItemProps) {
  return <TodoItemView todo={todo} onToggle={onToggle} />
}

export default TodoItem
