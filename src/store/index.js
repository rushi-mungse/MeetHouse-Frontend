import { configureStore } from '@reduxjs/toolkit'
import auth from './slice/authSlice'
import activate from './slice/activateSlice'

export default configureStore({
  reducer: {
      auth,
      activate
  },
})