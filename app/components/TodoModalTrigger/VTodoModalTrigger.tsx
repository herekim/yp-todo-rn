import { View, StyleSheet } from 'react-native'

import AddButton from '../Button/AddButton'

interface TodoModalTriggerProps {
  toggleModal: (type: 'open' | 'close') => void
}

const VTodoModalTrigger = ({ toggleModal }: TodoModalTriggerProps) => {
  return (
    <View style={styles.container}>
      <AddButton
        style={styles.addButton}
        onPress={() => toggleModal('open')}
        size={40}
        color="#3d67fc"
      />
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
