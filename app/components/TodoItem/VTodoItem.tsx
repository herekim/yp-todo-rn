import { Text, TouchableOpacity, View, StyleSheet } from 'react-native'

import Checkbox from 'expo-checkbox'

import DetailButton from '../Button/DetailButton/DetailButton'

import { Todo } from '../../shared/types'

interface VTodoItemProps {
  todo: Todo
  toggleEditingModal: (type: 'open' | 'close') => void
  toggleCheckbox: (id: number) => void
  onDetailIconPress: (event: any) => void
  completed: boolean
}

const VTodoItem = ({
  todo,
  toggleEditingModal,
  toggleCheckbox,
  onDetailIconPress,
  completed,
}: VTodoItemProps) => {
  return (
    <View style={styles.item}>
      <TouchableOpacity style={styles.row}>
        <Checkbox
          value={completed}
          style={styles.checkbox}
          onValueChange={() => toggleCheckbox(todo.id)}
          color="#3d67fc"
        />
        <TouchableOpacity onPress={() => toggleEditingModal('open')}>
          <Text style={completed ? styles.completed : styles.content}>
            {todo.content}
          </Text>
        </TouchableOpacity>
      </TouchableOpacity>
      <DetailButton onPress={onDetailIconPress} />
    </View>
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
    borderRadius: 100,
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
  },
})

export default VTodoItem
