import {
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  Modal,
  StyleSheet,
} from 'react-native'

import { MaterialIcons, Ionicons } from '@expo/vector-icons'

interface VOptionModalProps {
  isOpen: boolean
  toggleModal: (type: 'open' | 'close') => void
  position: { x: number; y: number }
  onDelete: (id: number) => void
  todoId: number
}

const VOptionModal = ({
  isOpen,
  toggleModal,
  position,
  onDelete,
  todoId,
}: VOptionModalProps) => {
  return (
    <Modal transparent={true} visible={isOpen}>
      <TouchableWithoutFeedback onPress={() => toggleModal('close')}>
        <View style={styles.modalBackground}>
          <TouchableWithoutFeedback onPress={(e) => e.stopPropagation()}>
            <View
              style={[
                styles.modalView,
                { top: position?.y - 20, left: position?.x - 80 },
              ]}
            >
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                  gap: 10,
                }}
              >
                <Ionicons
                  name="document-text-outline"
                  size={20}
                  color="black"
                />
                <Text>자세히</Text>
              </View>
              <TouchableOpacity
                onPress={() => onDelete(todoId)}
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                  gap: 10,
                }}
              >
                <MaterialIcons
                  name="delete-outline"
                  color="#FF5532"
                  size={20}
                />
                <Text style={{ color: '#FF5532' }}>삭제</Text>
              </TouchableOpacity>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  )
}

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    flexDirection: 'column',
    gap: 20,
    position: 'absolute',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
})

export default VOptionModal
