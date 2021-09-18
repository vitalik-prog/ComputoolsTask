import {createAction, createAsyncThunk } from '@reduxjs/toolkit'
import { AsyncThunkConfig, LoadPhotosPayload, Photo } from '../../common/types'
import { ActionType } from './common'

const loadPhotos = createAsyncThunk<Photo[], LoadPhotosPayload, AsyncThunkConfig>(
  ActionType.LOAD_PHOTOS,
  async (LoadPhotosPayload, { extra }) => {
    const { photoApi } = extra
    const photos = await photoApi.getAllPhoto(LoadPhotosPayload)

    return photos
  }
)

const resetState = createAction(ActionType.RESET_STATE)

export { loadPhotos, resetState }
