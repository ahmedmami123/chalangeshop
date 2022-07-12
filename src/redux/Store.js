import { configureStore } from '@reduxjs/toolkit'
import Shopslice from './shopslice/Shopslice'

export const store = configureStore({
  reducer: {
    shop:Shopslice,
  },
})