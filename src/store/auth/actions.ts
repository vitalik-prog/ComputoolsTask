import {createAsyncThunk} from '@reduxjs/toolkit'
import {
  AsyncThunkConfig,
  User,
  UserSignInPayload,
} from '../../common/types'
import {Session} from '../../common/enums'
import {ActionType} from './common'

const signIn = createAsyncThunk<User, UserSignInPayload, AsyncThunkConfig>(
  ActionType.SIGN_IN,
  async (loginPayload, {extra}) => {
    const {authApi, secureStorageService} = extra
    const {email, password} = loginPayload
    const user = await authApi.signIn()

    const candidate = await secureStorageService.getItemAsync(Session.USER_SESSION)

    if (!candidate) {
      await secureStorageService.setItemAsync(Session.USER_SESSION,
        JSON.stringify({
          email,
          password
        }))
    }

    return user
  }
)

const getCurrentUser = createAsyncThunk<
  User | null,
  undefined,
  AsyncThunkConfig
  >(ActionType.SIGN_IN, async (_args, { extra }) => {
  const { authApi, secureStorageService } = extra
  const candidate = await secureStorageService.getItemAsync(Session.USER_SESSION)

  const currentUser = candidate ? await authApi.signIn() : null

  return currentUser
})

const resetUser = createAsyncThunk<void, undefined, AsyncThunkConfig>(
  ActionType.RESET_USER,
  async (_args, {extra}) => {
    const {secureStorageService} = extra
    await secureStorageService.deleteItemAsync(Session.USER_SESSION)
  }
)

export {signIn, resetUser, getCurrentUser}
