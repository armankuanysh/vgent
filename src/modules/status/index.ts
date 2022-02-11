import { readFile } from 'fs/promises'
import Chalk from 'chalk'
import { IStatus } from 'types/status'
import { IConfig } from 'types/config'
import { IAlerts } from 'types/alerts'

export default class Status implements IStatus {
  private _isNuxtApp = false

  constructor(private chalk: typeof Chalk, private alerts: IAlerts) {}

  get isNuxtApp(): boolean {
    return this._isNuxtApp
  }

  set isNuxtApp(status: boolean) {
    this._isNuxtApp = status
  }

  async checkNuxt(): Promise<void> {
    try {
      const packageJsonText = await readFile(process.cwd() + '/package.json', {
        encoding: 'utf8',
      })
      const packageJson = JSON.parse(packageJsonText)
      if (
        packageJson &&
        packageJson.dependencies &&
        packageJson.dependencies.nuxt
      ) {
        console.log(this.chalk.green(`nuxt ${packageJson.dependencies.nuxt}`))
        this.isNuxtApp = true
      } else {
        this.alerts.cantFindNuxt()
        this.isNuxtApp = false
      }
    } catch (e) {
      if (e.code === 'ENOENT') {
        this.alerts.cantFindNuxt()
      }
    }
  }

  async checkConfig(): Promise<IConfig> {
    try {
      const file = await readFile(process.cwd() + '/.nxrc', {
        encoding: 'utf8',
      })
      const projectConfig: IConfig = JSON.parse(file)
      if (projectConfig) {
        return projectConfig
      } else {
        this.alerts.invalidProjectConfig()
      }
    } catch (e) {
      if (e.code === 'ENOENT') {
        this.alerts.cantFindProjectConfig()
      }
    }
  }
}
