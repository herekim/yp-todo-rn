import { Text, TouchableOpacity, View, StyleSheet } from 'react-native'
import TodoModal from '../TodoModal/TodoModal'
import OptionModal from '../Modal/OptionModal'
import Checkbox from 'expo-checkbox'
import { Entypo } from '@expo/vector-icons'

import { Todo } from '../../shared/types'

interface VTodoItemProps {
  todo: Todo
  isEditingModalOpen: boolean
  isOptionModalOpen: boolean
  toggleEditingModal: () => void
  toggleOptionModal: () => void
  modalPosition: { x: number; y: number }
  onDetailIconPress: (event: any) => void
  onDelete: (id: number) => void
}

const VTodoItem = ({
  todo,
  isEditingModalOpen,
  isOptionModalOpen,
  toggleEditingModal,
  toggleOptionModal,
  modalPosition,
  onDetailIconPress,
  onDelete,
}: VTodoItemProps) => {
  return (
    <TouchableOpacity onPress={toggleEditingModal}>
      <View style={styles.item}>
        <View style={styles.row}>
          <Checkbox style={styles.checkbox} />
          <Text style={todo.completed ? styles.completed : styles.content}>
            {todo.content}
          </Text>
        </View>
        <TouchableOpacity
          style={{ height: '100%' }}
          onPress={onDetailIconPress}
        >
          <Entypo name="dots-three-horizontal" size={20} color="lightgray" />
        </TouchableOpacity>
      </View>
      <OptionModal
        isOpen={isOptionModalOpen}
        toggleModal={toggleOptionModal}
        position={modalPosition}
        onDelete={onDelete}
        todoId={todo.id}
      />
      <TodoModal isOpen={isEditingModalOpen} toggleModal={toggleEditingModal} />
    </TouchableOpacity>
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
