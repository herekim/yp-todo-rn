import type { NativeStackNavigationProp } from '@react-navigation/native-stack'

export type RootStackParamList = {
  Home: undefined
  Detail: { todoId: number }
}

export type NavigationProps = NativeStackNavigationProp<
  RootStackParamList,
  'Home' | 'Detail'
>
