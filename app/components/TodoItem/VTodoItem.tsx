import React from 'react'
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native'
import Checkbox from 'expo-checkbox'

type Todo = {
  id: number
  content: string
  completed: boolean
}

type TodoItemProps = {
  todo: Todo
  onToggle: (id: number) => void
}

const VTodoItem = ({ todo, onToggle }: TodoItemProps) => {
  return (
    <TouchableOpacity onPress={() => onToggle(todo.id)}>
      <View style={styles.item}>
        <View style={styles.row}>
          <Checkbox style={styles.checkbox} />
          <Text style={todo.completed ? styles.completed : styles.content}>
            {todo.content}
          </Text>
        </View>
        <TouchableOpacity style={styles.deleteButton}>
          <Text style={styles.deleteText}>X</Text>
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
    backgroundColor: 'white',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    gap: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    marginRight: 15,
  },
  content: {
    fontSize: 16,
    color: '#333',
  },
  completed: {
    textDecorationLine: 'line-through',
    color: '#aaa',
  },
  deleteButton: {
    marginLeft: 20,
  },
  deleteText: {},
})

export default VTodoItem
