import { ScrollView, StyleSheet } from 'react-native'
import TodoItem from '../TodoItem/TodoItem'

import { Todo } from '../../shared/types'

type TodoListProps = {
  todos: Todo[]
}

const VTodoList = ({ todos }: TodoListProps) => {
  return (
    <ScrollView style={styles.list}>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
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
