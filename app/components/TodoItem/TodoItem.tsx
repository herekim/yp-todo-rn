import { useState } from 'react'
import { GestureResponderEvent } from 'react-native'

import VTodoItem from './VTodoItem'

import { useDispatch } from 'react-redux'
import { deleteTodoStart } from '../../store/slices/todoSlice'

import { Todo } from '../../shared/types'

interface TodoItemProps {
  todo: Todo
}

function TodoItem({ todo }: TodoItemProps) {
  const dispatch = useDispatch()

  const [isEditingModalOpen, setIsEditingModalOpen] = useState(false)
  const [isOptionModalOpen, setIsOptionModalOpen] = useState(false)

  const [modalPosition, setModalPosition] = useState({ x: 0, y: 0 })

  const toggleEditingModal = () => {
    setIsEditingModalOpen((prev) => !prev)
  }

  const toggleOptionModal = () => {
    setIsOptionModalOpen((prev) => !prev)
  }

  const onDelete = (id: number) => {
    dispatch(deleteTodoStart(id))
  }

  const onDetailIconPress = (event: GestureResponderEvent) => {
    toggleOptionModal()
    setModalPosition({ x: event.nativeEvent.pageX, y: event.nativeEvent.pageY })
  }

  const props = {
    todo,
    isEditingModalOpen,
    isOptionModalOpen,
    toggleEditingModal,
    toggleOptionModal,
    modalPosition,
    onDetailIconPress,
    onDelete,
  }

  return <VTodoItem {...props} />
}

export default TodoItem
