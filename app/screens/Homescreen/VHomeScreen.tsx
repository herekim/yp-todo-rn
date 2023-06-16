import { StyleSheet, View, Text } from 'react-native'

import TodoModalTrigger from '../../components/TodoModalTrigger/TodoModalTrigger'
import TodoList from '../../components/TodoList/TodoList'
import TodoModal from '../../components/TodoModal/TodoModal'
import OptionModal from '../../components/Modal/OptionModal'

import { Todo } from '../../shared/types'

interface VHomeScreenProps {
  todos: Todo[]
}

const VHomeScreen = ({ todos }: VHomeScreenProps) => {
  return (
    <View style={styles.container}>
      {todos.length > 0 ? (
        <Text style={{ fontSize: 28, fontWeight: '800', marginBottom: 30 }}>
          할 일을 마무리하세요.
        </Text>
      ) : (
        <Text style={{ fontSize: 28, fontWeight: '800', marginBottom: 30 }}>
          할 일이 없어요!
        </Text>
      )}
      <TodoList todos={todos} />
      <TodoModalTrigger />
      <TodoModal />
      <OptionModal />
    </View>
  )
}

export default VHomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 30,
  },
})
