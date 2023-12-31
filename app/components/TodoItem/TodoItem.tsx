import { useEffect } from 'react'

import { GestureResponderEvent } from 'react-native'

import VTodoItem from './VTodoItem'

import { useDispatch } from 'react-redux'
import { deleteTodoStart } from '../../store/slices/todoSlice'
import { openModal, closeModal } from '../../store/slices/modalSlice'

import { useCompleted } from '../../domains/hooks'

import { Todo } from '../../shared/types'

interface TodoItemProps {
  todo: Todo
}

const TodoItem = ({ todo }: TodoItemProps) => {
  const dispatch = useDispatch()
  const { completed, toggleCheckbox } = useCompleted(todo.id)

  const toggleEditingModal = (type: 'open' | 'close') => {
    if (completed) return

    if (type === 'open') {
      dispatch(openModal({ modalType: 'todoModal', payload: todo }))
    } else {
      dispatch(closeModal('todoModal'))
    }
  }

  const toggleOptionModal = (
    type: 'open' | 'close',
    event?: GestureResponderEvent,
  ) => {
    if (type === 'open' && event) {
      const position = {
        x: event.nativeEvent.pageX,
        y: event.nativeEvent.pageY,
      }
      dispatch(
        openModal({
          modalType: 'optionModal',
          payload: { position, todoId: todo.id },
        }),
      )
    } else {
      dispatch(closeModal('optionModal'))
    }
  }

  const onDetailIconPress = (event: GestureResponderEvent) => {
    toggleOptionModal('open', event)
  }

  const onDelete = (id: number) => {
    dispatch(deleteTodoStart(id))
  }

  const props = {
    todo,
    toggleEditingModal,
    toggleCheckbox,
    onDetailIconPress,
    onDelete,
    completed,
  }

  return <VTodoItem {...props} />
}

export default TodoItem
