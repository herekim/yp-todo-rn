import { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

const useCompleted = (id: number) => {
  const [completed, setCompleted] = useState(false)

  useEffect(() => {
    const loadCompletionStatus = async () => {
      const storedStatus = await AsyncStorage.getItem(`todo:${id}:completed`)
      setCompleted(storedStatus === 'true')
    }

    loadCompletionStatus()
  }, [id])

  const toggleCheckbox = async (id: number) => {
    const newCompletedStatus = !completed
    setCompleted(newCompletedStatus)

    await AsyncStorage.setItem(
      `todo:${id}:completed`,
      String(newCompletedStatus),
    )
  }

  return { completed, toggleCheckbox }
}

export default useCompleted
