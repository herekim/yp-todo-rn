import React from 'react'
import VOptionModal from './VOptionModal'

export interface OptionModalProps {
  isOpen: boolean
  toggleModal: () => void
  position: { x: number; y: number }
  onDelete: (id: number) => void
  todoId: number
}

const OptionModal = (props: OptionModalProps) => {
  return <VOptionModal {...props} />
}

export default OptionModal
