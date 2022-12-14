import { createSlice } from '@reduxjs/toolkit'
import { localStorageKey } from '../../const'
import { localStorageUtil } from '../../utils'

const { set, get } = localStorageUtil(localStorageKey.timestampedItems, [])
const oldList = JSON.parse(get())
console.log(oldList)

export const timestampListSlice = createSlice({
  name: 'timestampList',
  initialState: {
    loading: false,
    data: oldList, 
    // data: [...oldList],
    error: null,
  },
  reducers: {
    setTimestampList: (state, action) => {
      state.data = action.payload
    },
    getTimestampList: (state, action) => {
      return [...state.data]
    },
    addTimestampList: (state, action) => {
      console.log(state.data)
      console.log(action.payload)
      state.data = [action.payload, ...state.data]
    },
    deleteTimestampList: (state, action) => {
      const newList = [...state.data]
      newList.splice(action.payload, 1)
      console.log(action.payload)
      state.data = newList
    },
  },
})

export const {
  setTimestampList,
  getTimestampList,
  addTimestampList,
  deleteTimestampList,
} = timestampListSlice.actions

export const timestampListReducer = timestampListSlice.reducer
