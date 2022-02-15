import { access } from 'fs/promises'
import inquirer from 'inquirer'
import { IConfig } from 'types/config'
import { componentType, pageType } from 'types/generator'
import { ISettings } from 'types/settings'

export default abstract class Core {
  static isNuxtProject = false
  protected src: IConfig['src']
  protected componentDir: IConfig['dir']['components']
  protected pageDir: IConfig['dir']['pages']
  protected script: IConfig['components']['scriptLang']
  protected componentApi: IConfig['components']['componentApi']
  protected style: IConfig['components']['styleLang']
  protected componentIndex: IConfig['components']['useIndex']
  protected pageIndex: IConfig['pages']['useIndex']
  protected atomic: IConfig['components']['atomicDesign']
  constructor(
    protected readonly settings: ISettings,
    protected inquirer: inquirer.Inquirer
  ) {}

  protected prepare() {
    this.src = this.settings.config.src
    this.componentDir = this.settings.config.dir.components
    this.pageDir = this.settings.config.dir.pages
    this.script = this.settings.config.components.scriptLang
    this.componentApi = this.settings.config.components.componentApi
    this.style = this.settings.config.components.styleLang
    this.componentIndex = this.settings.config.components.useIndex
    this.pageIndex = this.settings.config.pages.useIndex
    this.atomic = this.settings.config.components.atomicDesign
  }

  abstract pathToFile(name: string, type: pageType | componentType): string

  protected capitalize(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  protected async dirExists(path: string) {
    try {
      await access(path)
      return true
    } catch {
      return false
    }
  }

  protected async rewriteModule(path: string, name: string) {
    const exists = await this.dirExists(path)
    if (exists) {
      const { rewrite } = await inquirer.prompt({
        type: 'confirm',
        name: 'rewrite',
        message: `File ${name} is exist. Do you want to rewrite file?`,
      })
      return rewrite
    }
    return true
  }
}
