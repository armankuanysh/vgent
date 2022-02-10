var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
    function adopt(value) {return value instanceof P ? value : new P(function (resolve) {resolve(value);});}
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {try {step(generator.next(value));} catch (e) {reject(e);}}
        function rejected(value) {try {step(generator["throw"](value));} catch (e) {reject(e);}}
        function step(result) {result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);}
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { options } from './options.js';
export default class Shell {
    constructor(yargs, chalk, commands) {
        this.yargs = yargs;
        this.chalk = chalk;
        this.commands = commands;
    }
    bootstrap() {
        this.yargs(process.argv.slice(2)).
        usage(`Info: ${this.chalk.green('nx')} is boilerplate file generator for Nuxt.js`).
        command('health', 'Check project', () => {}, () => __awaiter(this, void 0, void 0, function* () {
            yield this.commands.health();
        })).
        command('make', 'Used for some generations', () => {}, options => {
            if (options.c) {
                this.commands.components();
            }
        }).
        option('c', options['c']).
        option('p', options['p']).
        option('s', options['s']).
        help(true).argv;
    }}

//# sourceMappingURL=shell.js.map