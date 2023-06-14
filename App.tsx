import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import HomeScreen from './app/screens/HomeScreen'
import DetailScreen from './app/screens/DetailScreen'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="YPLabs" component={HomeScreen} />
        <Stack.Screen name="ToDo" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
