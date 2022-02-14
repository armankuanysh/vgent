import { access } from 'fs/promises'
import { ISettings } from 'types/settings'

export default class Core {
  static isNuxtProject = false
  constructor(protected readonly settings: ISettings) {}

  async dirExists(path: string) {
    try {
      await access(path)
      return true
    } catch {
      return false
    }
  }
}
