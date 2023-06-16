import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import VHomeScreen from './VHomeScreen'

import { getTodosStart } from '../../store/slices/todoSlice'

import { RootState } from '../../store'

const HomeScreen = () => {
  const dispatch = useDispatch()
  const { todos } = useSelector((state: RootState) => state.todo)

  useEffect(() => {
    dispatch(getTodosStart())
  }, [dispatch])

  return <VHomeScreen todos={todos} />
}

export default HomeScreen
