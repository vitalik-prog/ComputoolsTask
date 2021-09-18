import { ApiPath, HttpMethod } from '../../common/enums'
import { User } from '../../common/types'
import { Http } from '../http'
import {getRandomUserId} from "../../helpers/getRandomUserId";

type Constructor = {
  http: Http
  apiPath: string
}

class AuthApi {
  #http: Http
  #apiPath: string

  constructor({ http, apiPath }: Constructor) {
    this.#http = http
    this.#apiPath = apiPath
  }

  public signIn(): Promise<User> {
    return this.#http.load(
      `${this.#apiPath}${ApiPath.AUTH}${getRandomUserId()}`,
      {
        method: HttpMethod.GET
      }
    )
  }
}

export { AuthApi }
