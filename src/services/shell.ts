import Chalk from 'chalk'
import Yargs from 'yargs'
import { ICommands } from 'types/commands'
import { options } from './options.js'
import { IShell } from 'types/shell'
import { componentType } from 'types/generator.js'
import { log } from 'console'

export default class Shell implements IShell {
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
        async (options) => {
          if (options.c) {
            const name = options.c as string
            const type = ((options.a && 'atoms') ||
              (options.m && 'molecules') ||
              (options.o && 'organisms') ||
              (options.t && 'templates') ||
              'atoms') as componentType
            await this.commands.components(name, type)
          }
        }
      )
      .command(
        'init',
        `Initialize ${this.chalk.green('nx')} in the project`,
        () => {},
        async (options) => {
          await this.commands.init(options.q as boolean)
        }
      )
      .option('q', options['q'])
      .option('c', options['c'])
      .option('a', options['a'])
      .option('m', options['m'])
      .option('o', options['o'])
      .option('t', options['t'])
      .option('p', options['p'])
      .option('s', options['s'])
      .help(true).argv
  }
}
