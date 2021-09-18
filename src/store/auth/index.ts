import { createSlice } from '@reduxjs/toolkit'
import { DataStatus } from '../../common/enums'
import { User } from '../../common/types'
import { resetUser, signIn } from './actions'

type State = {
  dataStatus: DataStatus
  user: User | null
}

const initialState: State = {
  dataStatus: DataStatus.IDLE,
  user: null
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(signIn.pending, (state) => {
      state.dataStatus = DataStatus.PENDING
    })
    builder.addCase(signIn.fulfilled, (state, action) => {
      state.dataStatus = DataStatus.FULFILLED
      state.user = action.payload
    })
    builder.addCase(signIn.rejected, (state) => {
      state.dataStatus = DataStatus.REJECTED
    })
    builder.addCase(resetUser.pending, (state) => {
      state.dataStatus = DataStatus.PENDING
    })
    builder.addCase(resetUser.fulfilled, (state) => {
      state.dataStatus = DataStatus.IDLE
      state.user = null
    })
    builder.addCase(resetUser.rejected, (state) => {
      state.dataStatus = DataStatus.REJECTED
    })
  }
})

const reducer = authSlice.reducer

export { reducer }
