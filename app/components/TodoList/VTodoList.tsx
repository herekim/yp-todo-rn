import { ScrollView, StyleSheet, Text } from 'react-native'
import TodoItem from '../TodoItem/TodoItem'

type Todo = {
  id: number
  content: string
  completed: boolean
}

type TodoListProps = {
  todos: Todo[]
}

const VTodoList = ({ todos }: TodoListProps) => {
  return (
    <ScrollView style={styles.list}>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={() => console.log('toggle')}
        />
      ))}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  list: {
    width: '100%',
  },
})

export default VTodoList
