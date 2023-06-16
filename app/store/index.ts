import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import { watcherSaga } from './sagas/todoSaga'

import todoReducer from './slices/todoSlice'
import modalReducer from './slices/modalSlice'

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
  reducer: {
    todo: todoReducer,
    modal: modalReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
})

sagaMiddleware.run(watcherSaga)

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
