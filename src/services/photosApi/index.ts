import { HttpMethod } from '../../common/enums'
import {LoadPhotosPayload, Photo} from '../../common/types'
import { Http } from '../http'
import { PhotoApiPath } from './common/enums'

type Constructor = {
  http: Http
  apiPath: string
}

class PhotoApi {
  #http: Http
  #apiPath: string

  constructor({ http, apiPath }: Constructor) {
    this.#http = http
    this.#apiPath = apiPath
  }

  public getAllPhoto({filter}: LoadPhotosPayload): Promise<Photo[]> {
    return this.#http.load(
      `${this.#apiPath}${PhotoApiPath.LIST}`,
      {
        method: HttpMethod.GET,
        query: filter
      }
    )
  }
}

export { PhotoApi }
