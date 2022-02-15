import { options } from "./options.js";
export default class Shell {
  constructor(yargs, chalk, commands) {
    this.yargs = yargs;
    this.chalk = chalk;
    this.commands = commands;
  }
  bootstrap() {
    this.yargs(process.argv.slice(2)).
    usage(`Info: ${this.chalk.green('vgent')} is boilerplate file generator for Nuxt.js and Vue.js`).
    command('$0', '', {}, async () => {
      await this.commands.placeholder();
    }).
    command('health', 'Check project', () => {}, async () => {
      await this.commands.health();
    }).
    command('make', 'Used for some generations', () => {}, async (options) => {
      if (!options.c && !options.p) {
        await this.commands.placeholder();
      }
      if (options.c) {
        const name = options.c;
        const type = options.a && 'atoms' ||
        options.m && 'molecules' ||
        options.o && 'organisms' ||
        options.t && 'templates' ||
        'atoms';
        await this.commands.components(name, type);
      }
      if (options.p) {
        const name = options.p;
        const type = options.slug && 'slug' ||
        options.id && 'id' ||
        'index';
        await this.commands.pages(name, type);
      }
    }).
    command('init', `Initialize ${this.chalk.green('vgent')} in the project`, () => {}, async (options) => {
      await this.commands.init(options.q);
    }).
    option('q', options['q']).
    option('c', options['c']).
    option('a', options['a']).
    option('m', options['m']).
    option('o', options['o']).
    option('t', options['t']).
    option('p', options['p']).
    option('slug', options['slug']).
    option('id', options['id']).
    option('s', options['s']).
    help(true).argv;
  }}

//# sourceMappingURL=shell.js.map