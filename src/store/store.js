import { configureStore } from '@reduxjs/toolkit'
import photoSlice from './slices/photoSlice'
import pictureSlice from './slices/pictureSlice'

export const store = configureStore({
  reducer: {
    photoSlice,
    pictureSlice
  },
})