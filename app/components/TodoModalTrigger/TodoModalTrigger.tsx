import { useState } from 'react'
import VTodoModalTrigger from './VTodoModalTrigger'

const TodoModalTrigger = () => {
  const [modalVisible, setModalVisible] = useState(false)

  const props = {
    isOpen: modalVisible,
    toggleModal: () => setModalVisible((prev) => !prev),
  }

  return <VTodoModalTrigger {...props} />
}

export default TodoModalTrigger
