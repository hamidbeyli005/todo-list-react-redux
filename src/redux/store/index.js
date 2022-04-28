import { configureStore } from '@reduxjs/toolkit'
import  Todo  from '../TodoSlice'

export const store = configureStore({
  reducer: {
      todo:Todo,
  },
})