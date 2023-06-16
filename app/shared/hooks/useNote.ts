import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { setNote } from '../../store/slices/todoSlice'

import { RootState } from '../../store'

const useNote = (id: number) => {
  const note = useSelector((state: RootState) => state.todo.note[id])
  const dispatch = useDispatch()

  useEffect(() => {
    const loadNote = async () => {
      const storedNote = await AsyncStorage.getItem(`todo:${id}:note`)
      dispatch(setNote({ id, note: storedNote || '' }))
    }

    loadNote()
  }, [id, dispatch])

  const updateNote = async (id: number, note: string) => {
    dispatch(setNote({ id, note }))

    await AsyncStorage.setItem(`todo:${id}:note`, note)
  }

  return { note, updateNote }
}

export default useNote
