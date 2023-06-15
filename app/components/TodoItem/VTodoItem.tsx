import React from 'react'
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native'
import Checkbox from 'expo-checkbox'
import { FontAwesome } from '@expo/vector-icons'

import { Todo } from '../../shared/types'

type TodoItemProps = {
  todo: Todo
  onToggle: (id: number) => void
  onDelete: (id: number) => void
}

const VTodoItem = ({ todo, onToggle, onDelete }: TodoItemProps) => {
  return (
    <TouchableOpacity onPress={() => onToggle(todo.id)}>
      <View style={styles.item}>
        <View style={styles.row}>
          <Checkbox style={styles.checkbox} />
          <Text style={todo.completed ? styles.completed : styles.content}>
            {todo.content}
          </Text>
        </View>
        <TouchableOpacity onPress={() => onDelete(todo.id)}>
          <FontAwesome name="trash-o" size={20} color="lightgray" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F5F5F5',
    borderRadius: 15,
    marginBottom: 10,
  },
  row: {
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
  },
  completed: {
    fontSize: 16,
    textDecorationLine: 'line-through',
    color: '#aaa',
  },
  deleteButton: {
    marginLeft: 20,
  },
  deleteText: {},
})

export default VTodoItem
