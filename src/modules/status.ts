import { readFile } from 'fs/promises'
import Chalk from 'chalk'
import Logs from 'utils/logs'

export default class Status {
  constructor(private chalk: typeof Chalk, private logs: Logs) {}

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
        this.logs.cantFindNuxt()
        return false
      }
    } catch (e) {
      if (e.code === 'ENOENT') {
        this.logs.cantFindNuxt()
      }
    }
  }

  async checkConfig() {
    try {
      const file = await readFile(process.cwd() + '/.nxrc', {
        encoding: 'utf8',
      })
      console.log('file', file)
    } catch (e) {
      if (e.code === 'ENOENT') {
        console.error(
          `Can't find ${this.chalk.green(
            '.nxrc'
          )} configuration file.\nRun 'touch ${this.chalk.green(
            '.nxrc'
          )} and provide some configurations.`
        )
      }
    }
  }
}
