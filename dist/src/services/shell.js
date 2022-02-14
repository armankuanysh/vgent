import { options } from "./options.js";
export default class Shell {
  constructor(yargs, chalk, commands) {
    this.yargs = yargs;
    this.chalk = chalk;
    this.commands = commands;
  }
  bootstrap() {
    this.yargs(process.argv.slice(2)).
    usage(`Info: ${this.chalk.green('nx')} is boilerplate file generator for Nuxt.js`).
    command('health', 'Check project', () => {}, async () => {
      await this.commands.health();
    }).
    command('make', 'Used for some generations', () => {}, (options) => {
      if (options.c) {
        this.commands.components();
      }
    }).
    command('init', `Initialize ${this.chalk.green('nx')} in the project`, () => {}, async (options) => {
      await this.commands.init(options.q);
    }).
    option('q', options['q']).
    option('c', options['c']).
    option('p', options['p']).
    option('s', options['s']).
    help(true).argv;
  }}

//# sourceMappingURL=shell.js.map