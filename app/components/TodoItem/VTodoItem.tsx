import React, { useState } from 'react'
import {
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  Modal,
  StyleSheet,
} from 'react-native'
import Checkbox from 'expo-checkbox'
import { Entypo, MaterialIcons, Ionicons } from '@expo/vector-icons'

import { Todo } from '../../shared/types'

type TodoItemProps = {
  todo: Todo
  onPress: (id: number) => void
  onDelete: (id: number) => void
}

const VTodoItem = ({ todo, onPress, onDelete }: TodoItemProps) => {
  const [modalVisible, setModalVisible] = useState(false)
  const [modalPosition, setModalPosition] = useState({ x: 0, y: 0 })

  const handlePress = (event) => {
    setModalVisible(!modalVisible)
    setModalPosition({ x: event.nativeEvent.pageX, y: event.nativeEvent.pageY })
  }

  return (
    <TouchableOpacity onPress={() => onPress(todo.id)} style={{ flex: 1 }}>
      <View style={styles.item}>
        <View style={styles.row}>
          <Checkbox style={styles.checkbox} />
          <Text style={todo.completed ? styles.completed : styles.content}>
            {todo.content}
          </Text>
        </View>
        <TouchableOpacity style={{ height: '100%' }} onPress={handlePress}>
          <Entypo name="dots-three-horizontal" size={20} color="lightgray" />
        </TouchableOpacity>
      </View>
      <Modal transparent={true} visible={modalVisible}>
        <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
          <View style={styles.modalBackground}>
            <TouchableWithoutFeedback onPress={(e) => e.stopPropagation()}>
              <View
                style={[
                  styles.modalView,
                  { top: modalPosition.y - 20, left: modalPosition.x - 80 },
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
                  <Text style={styles.modalText}>자세히</Text>
                </View>
                <TouchableOpacity
                  onPress={() => onDelete(todo.id)}
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
                  <Text style={[styles.modalText, { color: '#FF5532' }]}>
                    삭제
                  </Text>
                </TouchableOpacity>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    height: 60,
    backgroundColor: '#F5F5F5',
    borderRadius: 15,
    marginBottom: 10,
  },
  row: {
    flex: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    marginRight: 20,
    borderColor: 'black',
  },
  content: {
    fontSize: 16,
    color: '#333',
    flexShrink: 1,
  },
  completed: {
    fontSize: 16,
    textDecorationLine: 'line-through',
    color: '#aaa',
    flexShrink: 1,
  },
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
  modalText: {
    // marginBottom: 15,
    textAlign: 'center',
  },
})

export default VTodoItem
