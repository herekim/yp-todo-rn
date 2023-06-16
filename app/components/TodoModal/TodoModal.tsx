import { useEffect, useState } from 'react'
import { Keyboard, Platform } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'

import VTodoModal from './VTodoModal'

import { addTodoStart, updateTodoStart } from '../../store/slices/todoSlice'
import { closeModal } from '../../store/slices/modalSlice'

import { RootState } from '../../store'

const TodoModal = () => {
  const { todoModal } = useSelector((state: RootState) => state.modal)

  const [input, setInput] = useState(
    todoModal.todoItem ? todoModal?.todoItem.content : '',
  )
  const dispatch = useDispatch()

  useEffect(() => {
    if (todoModal.todoItem) {
      setInput(todoModal.todoItem.content)
    }
  }, [todoModal.todoItem])

  const onDismiss = () => {
    setInput('')
    dispatch(closeModal('todoModal'))
    Keyboard.dismiss()
  }

  const addOrEditTodo = () => {
    if (input.length > 0) {
      if (todoModal.todoItem) {
        dispatch(updateTodoStart({ ...todoModal.todoItem, content: input }))
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
    isOpen: todoModal.isOpen,
    onDismiss,
    addOrEditTodo,
    behavior,
    inputValue: input,
    setInputValue: (newValue: string) => setInput(newValue),
  }
  return <VTodoModal {...props} />
}

export default TodoModal
