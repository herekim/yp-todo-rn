import { FlatList, StyleSheet } from 'react-native'

import TodoItem from '../TodoItem/TodoItem'

import { Todo } from '../../shared/types'

type TodoListProps = {
  todos: Todo[]
  loadMoreTodos: () => void
}

const VTodoList = ({ todos, loadMoreTodos }: TodoListProps) => {
  return (
    <FlatList
      data={todos}
      renderItem={({ item }) => <TodoItem key={item.id} todo={item} />}
      keyExtractor={(item) => item.id.toString()}
      style={styles.list}
      contentContainerStyle={{ paddingBottom: 60 }}
      onEndReached={loadMoreTodos}
      onEndReachedThreshold={0.1}
    />
  )
}

const styles = StyleSheet.create({
  list: {
    width: '100%',
  },
})

export default VTodoList
