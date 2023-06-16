import {
  Text,
  View,
  Keyboard,
  TextInput,
  StyleSheet,
  TouchableWithoutFeedback,
  ScrollView,
  TouchableOpacity,
} from 'react-native'

import Checkbox from 'expo-checkbox'

import { Todo } from '../../shared/types'

interface VDetailScreenProps {
  todo: Todo
  value: string
  setValue: (text: string) => void
  note: string
  updateNote: (id: number, text: string) => void
  completed: boolean
  toggleCheckbox: (id: number) => void
  onUpdateButtonPress: () => void
}

const VDetailScreen = ({
  todo,
  value,
  setValue,
  note,
  updateNote,
  completed,
  toggleCheckbox,
  onUpdateButtonPress,
}: VDetailScreenProps) => {
  return (
    <View style={styles.container}>
      <ScrollView>
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
              onChangeText={(text) => updateNote(todo.id, text)}
              placeholder="노트를 입력하세요."
              multiline
            />
          </TouchableWithoutFeedback>
        </View>
        <View style={styles.section}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
            <Text style={{ fontSize: 28, fontWeight: 'bold' }}>완료 여부</Text>
            <Checkbox
              value={completed}
              style={styles.checkbox}
              onValueChange={() => toggleCheckbox(todo.id)}
              color="#3d67fc"
            />
          </View>
        </View>
      </ScrollView>
      <View
        style={{
          justifyContent: 'flex-end',
          paddingBottom: 20,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        }}
      >
        <TouchableOpacity
          style={{ backgroundColor: '#3d67fc', borderRadius: 20 }}
          onPress={onUpdateButtonPress}
        >
          <Text
            style={{
              padding: 20,
              color: 'white',
              fontSize: 18,
              fontWeight: 'bold',
              textAlign: 'center',
            }}
          >
            완료
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default VDetailScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
