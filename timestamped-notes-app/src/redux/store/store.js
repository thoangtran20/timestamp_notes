import { configureStore } from '@reduxjs/toolkit'
import { timestampListReducer } from '../slice/timestampSlice'

export const rootReducer = {
  timestampListReducer: timestampListReducer,
}

export const store = configureStore({
  reducer: rootReducer,
})
