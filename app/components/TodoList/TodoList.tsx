import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import VTodoList from './VTodoList'

import {
  getTodosStart,
  setDisplayedTodos,
  increaseDisplayedCount,
  resetDisplayedCount,
} from '../../store/slices/todoSlice'
import { RootState } from '../../store'

import { Todo } from '../../shared/types'

interface TodoListProps {
  todos: Todo[]
}

const TodoList = ({ todos }: TodoListProps) => {
  const dispatch = useDispatch()

  const displayedTodos = useSelector(
    (state: RootState) => state.todo.displayedTodos,
  )
  const displayedCount = useSelector(
    (state: RootState) => state.todo.displayedCount,
  )

  const [refreshing, setRefreshing] = useState(false)

  useEffect(() => {
    dispatch(getTodosStart())
  }, [dispatch])

  useEffect(() => {
    dispatch(setDisplayedTodos(todos.slice(0, displayedCount)))
  }, [todos, displayedCount, dispatch])

  const onRefresh = () => {
    setRefreshing(true)
    dispatch(resetDisplayedCount())
    dispatch(setDisplayedTodos(todos.slice(0, displayedCount)))
    setRefreshing(false)
  }

  const loadMoreTodos = () => {
    dispatch(increaseDisplayedCount())
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
