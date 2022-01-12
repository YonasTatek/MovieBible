import { configureStore } from '@reduxjs/toolkit'
import themeslice from './themeslice'
export default configureStore({
  reducer:{
    mytheme:themeslice,
  },
})