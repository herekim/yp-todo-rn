import { Text, TouchableOpacity, View, StyleSheet } from 'react-native'

import Checkbox from 'expo-checkbox'

import DetailButton from '../Button/DetailButton'

import { Todo } from '../../shared/types'

interface VTodoItemProps {
  todo: Todo
  toggleEditingModal: (type: 'open' | 'close') => void
  onDetailIconPress: (event: any) => void
}

const VTodoItem = ({
  todo,
  toggleEditingModal,
  onDetailIconPress,
}: VTodoItemProps) => {
  return (
    <>
      <View style={styles.item}>
        <TouchableOpacity
          style={styles.row}
          onPress={() => toggleEditingModal('open')}
        >
          <Checkbox style={styles.checkbox} />
          <Text style={todo.completed ? styles.completed : styles.content}>
            {todo.content}
          </Text>
        </TouchableOpacity>
        <DetailButton onPress={onDetailIconPress} />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    height: 60,
    backgroundColor: '#F5F5F5',
    borderRadius: 15,
    marginBottom: 10,
  },
  row: {
    flex: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    marginRight: 20,
    borderColor: 'black',
  },
  content: {
    fontSize: 16,
    color: '#333',
    flexShrink: 1,
  },
  completed: {
    fontSize: 16,
    textDecorationLine: 'line-through',
    color: '#aaa',
    flexShrink: 1,
  },
})

export default VTodoItem
