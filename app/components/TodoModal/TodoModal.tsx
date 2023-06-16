import { useState } from 'react'
import { Keyboard, Platform } from 'react-native'

import VTodoModal from './VTodoModal'

import { useDispatch } from 'react-redux'
import { addTodoStart, updateTodoStart } from '../../store/slices/todoSlice'

import { Todo } from '../../shared/types'

interface TodoModalProps {
  isOpen: boolean
  toggleModal: () => void
  todoItem?: Todo
}

const TodoModal = ({ isOpen, toggleModal, todoItem }: TodoModalProps) => {
  const [input, setInput] = useState(todoItem ? todoItem?.content : '')
  const dispatch = useDispatch()

  const onDismiss = () => {
    setInput('')
    toggleModal()
    Keyboard.dismiss()
  }

  const addOrEditTodo = () => {
    if (input.length > 0) {
      if (todoItem) {
        dispatch(updateTodoStart({ ...todoItem, content: input }))
      } else {
        dispatch(addTodoStart(input))
      }
      setInput('')
      onDismiss()
    }
  }

  const behavior =
    Platform.OS === 'ios' ? 'padding' : ('height' as 'padding' | 'height')

  const props = {
    isOpen,
    onDismiss,
    addOrEditTodo,
    behavior,
    inputValue: input,
    setInputValue: (newValue: string) => setInput(newValue),
  }
  return <VTodoModal {...props} />
}

export default TodoModal
