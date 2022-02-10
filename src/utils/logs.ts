import Chalk from 'chalk'

export default class Logs {
  constructor(private chalk: typeof Chalk) {}

  cantFindNuxt() {
    console.error(
      `Can't find ${this.chalk.green('nuxt')}. Is this project on Nuxt.js`
    )
  }
}
