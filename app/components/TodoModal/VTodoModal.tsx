import {
  View,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  Modal,
  TouchableWithoutFeedback,
} from 'react-native'

import AddButton from '../Button/AddButton/AddButton'

type VTodlModal = {
  isOpen: boolean
  onDismiss: () => void
  behavior: 'padding' | 'height'
  addOrEditTodo: () => void
  inputValue: string
  todoContent?: string
  setInputValue: (newValue: string) => void
}

const VTodoModal = ({
  isOpen,
  onDismiss,
  behavior,
  addOrEditTodo,
  inputValue,
  setInputValue,
}: VTodlModal) => {
  return (
    <Modal animationType="slide" transparent={true} visible={isOpen}>
      <TouchableWithoutFeedback onPress={onDismiss}>
        <KeyboardAvoidingView behavior={behavior} style={styles.centeredView}>
          <View style={styles.modalView}>
            <TextInput
              placeholder="새로운 할 일을 추가하세요."
              style={styles.input}
              value={inputValue}
              onChangeText={setInputValue}
              autoFocus
            />
            <AddButton
              style={styles.addButton}
              size={40}
              color="#3d67fc"
              onPress={addOrEditTodo}
            />
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </Modal>
  )
}

const styles = StyleSheet.create({
  addButton: {
    borderRadius: 100,
    backgroundColor: '#ffffff',
  },
  input: {
    flex: 1,
    height: 40,
    borderRadius: 20,
    paddingHorizontal: 15,
    backgroundColor: '#F5F5F5',
    color: '#000000',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  modalView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 15,
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
})

export default VTodoModal
