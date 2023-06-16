import { useDispatch } from 'react-redux'
import VTodoModalTrigger from './VTodoModalTrigger'

import { openModal, closeModal } from '../../store/slices/modalSlice'

const TodoModalTrigger = () => {
  const dispatch = useDispatch()

  const toggleModal = (type: 'open' | 'close') => {
    if (type === 'open') {
      dispatch(openModal({ modalType: 'todoModal' }))
    } else {
      dispatch(closeModal('todoModal'))
    }
  }

  const props = {
    toggleModal,
  }

  return <VTodoModalTrigger {...props} />
}

export default TodoModalTrigger
