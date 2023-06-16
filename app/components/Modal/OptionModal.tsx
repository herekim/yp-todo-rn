import { useSelector, useDispatch } from 'react-redux'
import { GestureResponderEvent } from 'react-native'

import { useNavigation } from '@react-navigation/native'
import type { NativeStackNavigationProp } from '@react-navigation/native-stack'

import VOptionModal from './VOptionModal'
import { openModal, closeModal } from '../../store/slices/modalSlice'

import { RootState } from '../../store'

import { deleteTodoStart } from '../../store/slices/todoSlice'

type RootStackParamList = {
  Home: undefined
  Detail: { todoId: number }
}

type Props = NativeStackNavigationProp<RootStackParamList, 'Detail'>

const OptionModal = () => {
  const { optionModal } = useSelector((state: RootState) => state.modal)
  const dispatch = useDispatch()

  const navigation = useNavigation<Props>()

  const onDeletePress = (id: number) => {
    dispatch(closeModal('optionModal'))
    dispatch(deleteTodoStart(id))
  }

  const onDetailPress = (id: number) => {
    dispatch(closeModal('optionModal'))
    navigation.navigate('Detail', { todoId: id })
  }

  const toggleModal = (
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
          payload: { position, todoId: optionModal.todoId },
        }),
      )
    } else {
      dispatch(closeModal('optionModal'))
    }
  }

  const props = {
    onDeletePress,
    onDetailPress,
    isOpen: optionModal.isOpen,
    toggleModal,
    position: optionModal.position,
    todoId: optionModal.todoId,
  }

  return <VOptionModal {...props} />
}

export default OptionModal
