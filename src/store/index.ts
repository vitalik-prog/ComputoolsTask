import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './rootReducer'
import {
  secureStorage as secureStorageService,
  authApi,
  photoApi
} from '../services'

const extraArgument = {
  secureStorageService,
  authApi,
  photoApi
}

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      thunk: {
        extraArgument
      }
    })
  }
})

export { extraArgument, store }
