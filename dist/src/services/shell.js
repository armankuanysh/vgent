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
    command('make', 'Used for some generations', () => {}, async (options) => {
      if (options.c) {
        const name = options.c;
        const type = options.a && 'atoms' ||
        options.m && 'molecules' ||
        options.o && 'organisms' ||
        options.t && 'templates' ||
        'atoms';
        await this.commands.components(name, type);
      }
    }).
    command('init', `Initialize ${this.chalk.green('nx')} in the project`, () => {}, async (options) => {
      await this.commands.init(options.q);
    }).
    option('q', options['q']).
    option('c', options['c']).
    option('a', options['a']).
    option('m', options['m']).
    option('o', options['o']).
    option('t', options['t']).
    option('p', options['p']).
    option('s', options['s']).
    help(true).argv;
  }}

//# sourceMappingURL=shell.js.map