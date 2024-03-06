import { configureStore } from '@reduxjs/toolkit'
import cartsliceReducer from '../cart/Cartslice'
export const store = configureStore({
  reducer: {
     cart:cartsliceReducer
  },
})