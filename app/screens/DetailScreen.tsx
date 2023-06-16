import { useState } from 'react'

import {
  Text,
  View,
  Keyboard,
  TextInput,
  StyleSheet,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../store'
import { updateTodoStart } from '../store/slices/todoSlice'

import { useCompleted } from '../shared/hooks'

import Checkbox from 'expo-checkbox'

const DetailScreen = ({ route }) => {
  const { todoId } = route.params
  const dispatch = useDispatch()
  const { completed, toggleCheckbox } = useCompleted(todoId)

  const todos = useSelector((state: RootState) => state.todo.todos)
  const todo = todos.find((todo) => todo.id === todoId)

  const [value, setValue] = useState(todo.content)
  const [note, setNote] = useState('')

  return (
    <View style={styles.container}>
      <ScrollView style={{ width: '100%' }}>
        <View style={styles.section}>
          <Text style={styles.title}>할 일</Text>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <TextInput
              style={styles.content}
              value={value}
              onChangeText={setValue}
              placeholder="할 일을 입력하세요."
              autoFocus
              multiline
            />
          </TouchableWithoutFeedback>
        </View>
        <View style={styles.section}>
          <Text style={styles.title}>노트</Text>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <TextInput
              style={styles.content}
              value={note}
              onChangeText={setNote}
              placeholder="노트를 입력하세요."
              multiline
            />
          </TouchableWithoutFeedback>
        </View>
        <View style={styles.section}>
          <Text style={styles.title}>완료 여부</Text>
          <Checkbox
            value={completed}
            style={styles.checkbox}
            onValueChange={() => toggleCheckbox(todo.id)}
            color="#3d67fc"
          />
        </View>
      </ScrollView>
    </View>
  )
}

export default DetailScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: 20,
    paddingTop: 40,
  },
  section: {
    width: '100%',
    marginBottom: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  content: {
    fontSize: 16,
    width: '100%',
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    paddingTop: 15,
    paddingBottom: 15,
    paddingHorizontal: 10,
  },
  checkbox: {
    marginRight: 20,
    borderRadius: 100,
  },
})
