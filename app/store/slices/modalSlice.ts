import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Todo } from '../../shared/types'

interface ModalState {
  todoModal: {
    isOpen: boolean
    todoItem: Todo | null
  }
  optionModal: {
    isOpen: boolean
    position: { x: number; y: number } | null
    todoId: number | null
  }
}

const initialState: ModalState = {
  todoModal: {
    isOpen: false,
    todoItem: null,
  },
  optionModal: {
    isOpen: false,
    position: null,
    todoId: null,
  },
}

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal(
      state,
      action: PayloadAction<{ modalType: string; payload?: any }>,
    ) {
      const { modalType, payload } = action.payload
      state[modalType].isOpen = true
      if (modalType === 'todoModal') {
        state[modalType].todoItem = payload
      } else if (modalType === 'optionModal') {
        state[modalType].position = payload.position
        state[modalType].todoId = payload.todoId
      }
    },
    closeModal(state, action: PayloadAction<string>) {
      const modalType = action.payload
      state[modalType].isOpen = false
      if (modalType === 'todoModal') {
        state[modalType].todoItem = null
      } else if (modalType === 'optionModal') {
        state[modalType].position = null
        state[modalType].todoId = null
      }
    },
  },
})

export const { openModal, closeModal } = modalSlice.actions

export default modalSlice.reducer
