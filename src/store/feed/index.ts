import { createSlice } from '@reduxjs/toolkit'
import { DataStatus } from '../../common/enums'
import { Photo } from '../../common/types'
import {loadPhotos, resetState} from './actions'

type State = {
  dataStatus: DataStatus
  photos: Photo[]
}

const initialState: State = {
  dataStatus: DataStatus.IDLE,
  photos: []
}

const feedSlice = createSlice({
  name: 'feed',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadPhotos.pending, (state) => {
      state.dataStatus = DataStatus.PENDING
    })
    builder.addCase(loadPhotos.fulfilled, (state, action) => {
      state.dataStatus = DataStatus.FULFILLED
      state.photos = state.photos.concat(action.payload)
    })
    builder.addCase(loadPhotos.rejected, (state) => {
      state.dataStatus = DataStatus.REJECTED
    })
    builder.addCase(resetState, (state) => {
      Object.assign(state, initialState)
    })
  }
})

const reducer = feedSlice.reducer

export { reducer }
