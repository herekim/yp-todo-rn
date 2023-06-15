import { useState } from 'react'
import { Keyboard, Platform } from 'react-native'

import VTodoModal from './VTodoModal'

import { useDispatch } from 'react-redux'
import { addTodoStart } from '../../store/slices/todoSlice'

const TodoModal = ({ isOpen, toggleModal }) => {
  const [input, setInput] = useState('')
  const dispatch = useDispatch()

  const onDismiss = () => {
    toggleModal()
    Keyboard.dismiss()
  }

  const addTodo = () => {
    if (input.length > 0) {
      dispatch(addTodoStart(input))
      setInput('')
      onDismiss()
    }
  }

  const behavior =
    Platform.OS === 'ios' ? 'padding' : ('height' as 'padding' | 'height')

  const props = {
    isOpen,
    onDismiss,
    addTodo,
    behavior,
    inputValue: input,
    setInputValue: (newValue: string) => setInput(newValue),
  }
  return <VTodoModal {...props} />
}

export default TodoModal
