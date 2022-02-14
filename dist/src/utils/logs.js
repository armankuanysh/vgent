"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;class Logs {
  constructor(chalk) {
    this.chalk = chalk;
  }
  cantFindNuxt() {
    console.error(`Can't find ${this.chalk.green('nuxt')}. Is this project on Nuxt.js`);
  }}

//# sourceMappingURL=logs.js.map
exports.default = Logs;