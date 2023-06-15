import VTodoList from './VTodoList'

import { Todo } from '../../shared/types'

type TodoListProps = {
  todos: Todo[]
}

const TodoList = ({ todos }: TodoListProps) => {
  return <VTodoList todos={todos} />
}

export default TodoList
