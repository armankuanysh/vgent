import Chalk from 'chalk'
import { IAlerts } from 'types/alerts'

export default class Alerts implements IAlerts {
  constructor(private chalk: typeof Chalk) {}

  cantFindNuxtOrVue() {
    console.error(
      `Can't find ${this.chalk.green('nuxt')} nor ${this.chalk.green(
        'vue'
      )} dependencies. Is this project on ${this.chalk.green(
        'Nuxt.js'
      )} or ${this.chalk.green('Vue.js')}?`
    )
  }

  cantFindProjectConfig() {
    console.error(
      `Can't find ${this.chalk.green(
        '.nxrc'
      )} configuration file.\nRun 'touch ${this.chalk.green(
        '.nxrc'
      )} and provide some configurations.`
    )
  }

  invalidProjectConfig() {
    console.error(
      `${this.chalk.red('Invalid config')}: seems ${this.chalk.green(
        '.nxrc'
      )} file has invalid options`
    )
  }
}
