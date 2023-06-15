import { View, StyleSheet } from 'react-native'

import TodoModal from '../TodoModal/TodoModal'
import AddButton from '../Button/AddButton'

interface TodoModalTriggerProps {
  isOpen: boolean
  toggleModal: () => void
}

const VTodoModalTrigger = ({ isOpen, toggleModal }: TodoModalTriggerProps) => {
  return (
    <View style={styles.container}>
      <AddButton
        style={styles.addButton}
        onPress={toggleModal}
        size={40}
        color="#3d67fc"
      />
      <TodoModal isOpen={isOpen} toggleModal={toggleModal} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 30,
    gap: 10,
    backgroundColor: '#black',
  },
  addButton: {
    position: 'absolute',
    right: 5,
    bottom: 20,
    borderRadius: 100,
    backgroundColor: '#ffffff',
  },
})

export default VTodoModalTrigger
