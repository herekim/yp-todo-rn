import VTodoModal from './VTodoModal'
import { Keyboard, Platform } from 'react-native'

const TodoModal = ({ isOpen, toggleModal }) => {
  const props = {
    isOpen,
    onDismiss: () => {
      toggleModal()
      Keyboard.dismiss()
    },
    behavior:
      Platform.OS === 'ios' ? 'padding' : ('height' as 'padding' | 'height'),
  }
  return <VTodoModal {...props} />
}

export default TodoModal
