import { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

const useCompleted = (id: number) => {
  const [completed, setCompleted] = useState(false)
  const [trigger, setTrigger] = useState(0)

  useEffect(() => {
    const loadCompletionStatus = async () => {
      const storedStatus = await AsyncStorage.getItem(`todo:${id}:completed`)
      setCompleted(storedStatus === 'true')

      const storedTrigger = await AsyncStorage.getItem(`todo:${id}:trigger`)
      setTrigger(storedTrigger ? Number(storedTrigger) : 0)
    }

    loadCompletionStatus()
  }, [id, trigger])

  const toggleCheckbox = async (id: number) => {
    const newCompletedStatus = !completed
    setCompleted(newCompletedStatus)

    await AsyncStorage.setItem(
      `todo:${id}:completed`,
      String(newCompletedStatus),
    )

    const newTrigger = trigger + 1
    setTrigger(newTrigger)
    await AsyncStorage.setItem(`todo:${id}:trigger`, String(newTrigger))
  }

  return { completed, toggleCheckbox }
}

export default useCompleted
