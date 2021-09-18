import { createSlice } from '@reduxjs/toolkit'
import { changeTheme } from './actions'
import { AppTheme } from "../../common/enums/app";

type State = {
  theme: AppTheme
}

const initialState: State = {
  theme: AppTheme.DARK,
}

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(changeTheme, (state) => {
      state.theme = state.theme === AppTheme.DARK
        ? state.theme = AppTheme.LIGHT
        : state.theme = AppTheme.DARK
    })
  }
})

const reducer = themeSlice.reducer

export { reducer }
