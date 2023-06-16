import { useState } from 'react'
import VTodoList from './VTodoList'

import { Todo } from '../../shared/types'

type TodoListProps = {
  todos: Todo[]
}

const TodoList = ({ todos }: TodoListProps) => {
  const [displayedTodos, setDisplayedTodos] = useState(todos.slice(0, 10))
  const [refreshing, setRefreshing] = useState(false)

  const onRefresh = () => {
    setRefreshing(true)
    setDisplayedTodos(todos.slice(0, 10))
    setRefreshing(false)
  }

  const loadMoreTodos = () => {
    let nextTodos = displayedTodos.concat(
      todos.slice(displayedTodos.length, displayedTodos.length + 10),
    )
    setDisplayedTodos(nextTodos)
  }

  const props = {
    todos: displayedTodos,
    loadMoreTodos,
    refreshing,
    onRefresh,
  }

  return <VTodoList {...props} />
}

export default TodoList
