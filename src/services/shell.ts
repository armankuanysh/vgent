import Chalk from 'chalk'
import Yargs, { Options } from 'yargs'
import { ICommands } from 'types/commands'
import { options } from './options.js'

export default class Shell {
  constructor(
    private yargs: typeof Yargs,
    private chalk: typeof Chalk,
    private commands: ICommands
  ) {}

  bootstrap() {
    this.yargs(process.argv.slice(2))
      .usage(
        `Info: ${this.chalk.green(
          'nx'
        )} is boilerplate file generator for Nuxt.js`
      )
      .command(
        'health',
        'Check project',
        () => {},
        async () => {
          await this.commands.health()
        }
      )
      .command(
        'make',
        'Used for some generations',
        () => {},
        (options) => {
          if (options.c) {
            this.commands.components()
          }
        }
      )
      .option('c', options['c'])
      .option('p', options['p'])
      .option('s', options['s'])
      .help(true).argv
  }
}
