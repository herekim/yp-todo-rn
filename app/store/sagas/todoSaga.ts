import { PayloadAction } from '@reduxjs/toolkit'
import { call, put, takeEvery } from 'redux-saga/effects'
import { getTodos, addTodo, updateTodo, deleteTodo } from '../../services/todo'
import {
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
} from '../slices/todoSlice'

function* fetchTodos() {
  try {
    const todos = yield call(getTodos)
    yield put(getTodosSuccess(todos))
  } catch (e) {
    yield put(getTodosFailure(e.toString()))
  }
}

function* addTodoSaga(action: PayloadAction<string>) {
  try {
    const newTodo = yield call(addTodo, action.payload)
    yield put(addTodoSuccess(newTodo))
  } catch (e) {
    yield put(addTodoFailure(e.toString()))
  }
}

function* updateTodoSaga(
  action: PayloadAction<{ id: number; content: string }>,
) {
  try {
    const updatedTodo = yield call(updateTodo, action.payload)
    yield put(updateTodoSuccess(updatedTodo))
  } catch (e) {
    yield put(updateTodoFailure(e.toString()))
  }
}

function* deleteTodoSaga(action: PayloadAction<number>) {
  try {
    yield call(deleteTodo, action.payload)
    yield put(deleteTodoSuccess(action.payload))
  } catch (e) {
    yield put(deleteTodoFailure(e.toString()))
  }
}

function* watcherSaga() {
  yield takeEvery(getTodosStart.type, fetchTodos)
  yield takeEvery(addTodoStart.type, addTodoSaga)
  yield takeEvery(updateTodoStart.type, updateTodoSaga)
  yield takeEvery(deleteTodoStart.type, deleteTodoSaga)
}

export { watcherSaga }
