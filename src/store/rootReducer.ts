import { combineReducers } from '@reduxjs/toolkit'
import { reducer as authReducer } from './auth'
import { reducer as feedReducer } from './feed'
import { reducer as themeReducer } from './theme'

const rootReducer = combineReducers({
  auth: authReducer,
  feed: feedReducer,
  theme: themeReducer
})

export default rootReducer
