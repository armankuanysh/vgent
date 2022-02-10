import { readFile } from 'fs/promises'
import Chalk from 'chalk'
import { IStatus } from 'types/status'
import { IConfig } from 'types/config'
import { IAlerts } from 'types/alerts'

export default class Status implements IStatus {
  constructor(private chalk: typeof Chalk, private alerts: IAlerts) {}

  async checkNuxt(): Promise<boolean> {
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
        return true
      } else {
        this.alerts.cantFindNuxt()
        return false
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
