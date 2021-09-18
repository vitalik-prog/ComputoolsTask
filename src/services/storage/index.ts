import { Storage as TStorage } from './common/types'

type Constructor = {
  storage: TStorage
}

class Storage {
  #storage: TStorage

  constructor({ storage }: Constructor) {
    this.#storage = storage
  }

  public getItemAsync(key: string): Promise<string | null> {
    return this.#storage.getItemAsync(key)
  }

  public setItemAsync(key: string, value: string): Promise<void> {
    return this.#storage.setItemAsync(key, value)
  }

  public deleteItemAsync(key: string): Promise<void> {
    return this.#storage.deleteItemAsync(key)
  }

  // public clear(): Promise<void> {
  //   return this.#storage.clear()
  // }
}

export { Storage }
