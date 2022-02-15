import { access } from 'fs/promises'
import { IConfig } from 'types/config'
import { ISettings } from 'types/settings'

export default class Core {
  static isNuxtProject = false
  protected src: IConfig['src']
  protected componentDir: IConfig['dir']['components']
  protected script: IConfig['components']['scriptLang']
  protected componentApi: IConfig['components']['componentApi']
  protected style: IConfig['components']['styleLang']
  protected index: IConfig['components']['useIndex']
  protected atomic: IConfig['components']['atomicDesign']
  constructor(protected readonly settings: ISettings) {}

  protected prepare() {
    this.src = this.settings.config.src
    this.componentDir = this.settings.config.dir.components
    this.script = this.settings.config.components.scriptLang
    this.componentApi = this.settings.config.components.componentApi
    this.style = this.settings.config.components.styleLang
    this.index = this.settings.config.components.useIndex
    this.atomic = this.settings.config.components.atomicDesign
  }

  protected async dirExists(path: string) {
    try {
      await access(path)
      return true
    } catch {
      return false
    }
  }
}
