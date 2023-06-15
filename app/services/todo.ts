import axiosClient from '../api/axios'
import { API } from '../api/api'

export const getTodos = async () => {
  try {
    const response = await axiosClient.get(API.GET_TODOS)
    return response.data
  } catch (error) {
    console.error(error)
  }
}

export const addTodo = async (content: string) => {
  try {
    const response = await axiosClient.post(API.CREATE_TODO, { content })
    return response.data
  } catch (error) {
    console.error(error)
  }
}

export const updateTodo = async ({ id, content }) => {
  try {
    const response = await axiosClient.patch(API.UPDATE_TODO(id), { content })
    return response.data
  } catch (error) {
    console.error(error)
  }
}

export const deleteTodo = async (id: number) => {
  try {
    const response = await axiosClient.delete(API.DELETE_TODO(id))
    return response.data
  } catch (error) {
    console.error(error)
  }
}
