import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { setCompleted } from '../../store/slices/todoSlice'

import { RootState } from '../../store'

const useCompleted = (id: number) => {
  const completed = useSelector((state: RootState) =>
    Boolean(state.todo.completed[id]),
  )
  const dispatch = useDispatch()

  useEffect(() => {
    const loadCompletionStatus = async () => {
      const storedStatus = await AsyncStorage.getItem(`todo:${id}:completed`)
      dispatch(setCompleted({ id, completed: storedStatus === 'true' }))
    }

    loadCompletionStatus()
  }, [id, dispatch])

  const toggleCheckbox = async (id: number) => {
    const newCompletedStatus = !completed
    dispatch(setCompleted({ id, completed: newCompletedStatus }))

    await AsyncStorage.setItem(
      `todo:${id}:completed`,
      String(newCompletedStatus),
    )
  }

  return { completed, toggleCheckbox }
}

export default useCompleted
