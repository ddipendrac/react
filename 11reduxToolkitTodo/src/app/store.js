import {configureStore} from '@reduxjs/toolkit'
import todoReducer from '../features/todo/todoSlice'

// 1. Create store
export const store = configureStore({
  reducer: todoReducer
})