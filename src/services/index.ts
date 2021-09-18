import * as SecureStore from 'expo-secure-store';
import {Path} from '../common/enums'
import { Http } from './http'
import { Storage } from './storage'
import { AuthApi } from './authApi'
import { PhotoApi } from './photosApi'

const secureStorage = new Storage({
  storage: SecureStore
})

const http = new Http({
  storage: secureStorage
})

const authApi = new AuthApi({
  http,
  apiPath: Path.API_USER_ORIGIN_URL
})

const photoApi = new PhotoApi({
  http,
  apiPath: Path.API_FOTO_ORIGIN_URL
})

export { secureStorage, authApi, photoApi }
