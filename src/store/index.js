import { configureStore } from '@reduxjs/toolkit'
import auth from './slice/authSlice'

export default configureStore({
  reducer: {
      auth
  },
})