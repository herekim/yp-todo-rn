import {
  ScrollView,
  StyleSheet,
  View,
  FlatList,
  RefreshControl,
} from 'react-native'
import TodoItem from '../TodoItem/TodoItem'

import { Todo } from '../../shared/types'

type TodoListProps = {
  todos: Todo[]
  loadMoreTodos: () => void
  refreshing: boolean
  onRefresh: () => void
}

const VTodoList = ({
  todos,
  loadMoreTodos,
  refreshing,
  onRefresh,
}: TodoListProps) => {
  return (
    <FlatList
      data={todos}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <TodoItem todo={item} />}
      onEndReached={loadMoreTodos}
      onEndReachedThreshold={0.5}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    />
  )
}

const styles = StyleSheet.create({
  list: {
    width: '100%',
  },
})

export default VTodoList
