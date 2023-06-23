import { configureStore } from '@reduxjs/toolkit'
import leftPannelSlice from './leftPannelSlice'

export const Store = configureStore({
  reducer: {
    visible:leftPannelSlice
  },
})