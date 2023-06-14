import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import TodoInput from './app/components/TodoInput/TodoInput'
import TodoList from './app/components/TodoList/TodoList'

type Todo = {
  id: number
  content: string
  completed: boolean
}

function HomeScreen() {
  return (
    <View style={styles.container}>
      <TodoInput />
      <TodoList todos={TODOS} />
    </View>
  )
}

function DetailsScreen() {
  return (
    <View>
      <Text>Details Screen</Text>
    </View>
  )
}

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="YPLabs" component={HomeScreen} />
        <Stack.Screen name="ToDo" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const TODOS: Todo[] = [
  { id: 1, content: '할 일 1', completed: false },
  { id: 2, content: '할 일 2', completed: true },
  { id: 3, content: '할 일 3', completed: false },
  { id: 4, content: '할 일 4', completed: false },
  { id: 5, content: '할 일 5', completed: false },
]

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
})
