import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Todo } from '../../shared/types'

type TodoState = {
  todos: Todo[]
  displayedTodos: Todo[]
  displayedCount: number
  loading: boolean
  error: string | null
  completed: { [key: number]: number }
  note: string
}

const initialState: TodoState = {
  todos: [],
  displayedTodos: [],
  displayedCount: 10,
  loading: false,
  error: null,
  completed: {},
  note: '',
}

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    getTodosStart: (state) => {
      state.loading = true
      state.error = null
    },
    getTodosSuccess: (state, action: PayloadAction<Todo[]>) => {
      state.todos = action.payload
      state.loading = false
    },
    getTodosFailure: (state, action: PayloadAction<string>) => {
      state.loading = false
      state.error = action.payload
    },
    addTodoStart: (state, action: PayloadAction<string>) => {
      state.loading = true
      state.error = null
    },
    addTodoSuccess: (state, action: PayloadAction<Todo>) => {
      state.todos.unshift(action.payload)
      state.loading = false
    },
    addTodoFailure: (state, action: PayloadAction<string>) => {
      state.loading = false
      state.error = action.payload
    },
    updateTodoStart: (
      state,
      action: PayloadAction<{
        id: number
        content: string
      }>,
    ) => {
      state.loading = true
      state.error = null
    },
    updateTodoSuccess: (state, action: PayloadAction<Todo>) => {
      const index = state.todos.findIndex(
        (todo) => todo.id === action.payload.id,
      )
      if (index !== -1) {
        state.todos[index] = action.payload
      }
      state.loading = false
    },
    updateTodoFailure: (state, action: PayloadAction<string>) => {
      state.loading = false
      state.error = action.payload
    },
    deleteTodoStart: (state, action: PayloadAction<number>) => {
      state.loading = true
      state.error = null
    },
    deleteTodoSuccess: (state, action: PayloadAction<number>) => {
      const index = state.todos.findIndex((todo) => todo.id === action.payload)
      if (index !== -1) {
        state.todos.splice(index, 1)
      }
      state.loading = false
    },
    deleteTodoFailure: (state, action: PayloadAction<string>) => {
      state.loading = false
      state.error = action.payload
    },
    setCompleted: (state, action) => {
      state.completed[action.payload.id] = action.payload.completed
    },
    setNote: (state, action: PayloadAction<string>) => {
      state.note = action.payload
    },
    setDisplayedTodos: (state, action: PayloadAction<Todo[]>) => {
      state.displayedTodos = action.payload
    },
    increaseDisplayedCount: (state) => {
      state.displayedCount += 10
    },
    resetDisplayedCount: (state) => {
      state.displayedCount = 10
    },
  },
})

export const {
  getTodosStart,
  getTodosSuccess,
  getTodosFailure,
  addTodoStart,
  addTodoSuccess,
  addTodoFailure,
  updateTodoStart,
  updateTodoSuccess,
  updateTodoFailure,
  deleteTodoStart,
  deleteTodoSuccess,
  deleteTodoFailure,
  setCompleted,
  setNote,
  setDisplayedTodos,
  increaseDisplayedCount,
  resetDisplayedCount,
} = todoSlice.actions

export default todoSlice.reducer
