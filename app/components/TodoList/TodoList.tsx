import VTodoList from './VTodoList'

type Todo = {
  id: number
  content: string
  completed: boolean
}

type TodoListProps = {
  todos: Todo[]
}

const TodoList = ({ todos }: TodoListProps) => {
  return <VTodoList todos={todos} />
}

export default TodoList
