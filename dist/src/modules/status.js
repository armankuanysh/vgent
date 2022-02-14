"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;








var _promises = require("fs/promises");var __awaiter = void 0 && (void 0).__awaiter || function (thisArg, _arguments, P, generator) {function adopt(value) {return value instanceof P ? value : new P(function (resolve) {resolve(value);});}return new (P || (P = Promise))(function (resolve, reject) {function fulfilled(value) {try {step(generator.next(value));} catch (e) {reject(e);}}function rejected(value) {try {step(generator["throw"](value));} catch (e) {reject(e);}}function step(result) {result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);}step((generator = generator.apply(thisArg, _arguments || [])).next());});};
class Status {
  constructor(chalk, alerts) {
    this.chalk = chalk;
    this.alerts = alerts;
  }
  checkNuxt() {
    return __awaiter(this, void 0, void 0, function* () {
      try {
        const packageJsonText = yield (0, _promises.readFile)(process.cwd() + '/package.json', {
          encoding: 'utf8' });

        const packageJson = JSON.parse(packageJsonText);
        if (packageJson &&
        packageJson.dependencies &&
        packageJson.dependencies.nuxt) {
          console.log(this.chalk.green(`nuxt ${packageJson.dependencies.nuxt}`));
          return true;
        } else
        {
          this.alerts.cantFindNuxt();
          return false;
        }
      }
      catch (e) {
        if (e.code === 'ENOENT') {
          this.alerts.cantFindNuxt();
        }
      }
    });
  }
  checkConfig() {
    return __awaiter(this, void 0, void 0, function* () {
      try {
        const file = yield (0, _promises.readFile)(process.cwd() + '/.nxrc', {
          encoding: 'utf8' });

        const projectConfig = JSON.parse(file);
        if (projectConfig) {
          return projectConfig;
        } else
        {
          this.alerts.invalidProjectConfig();
        }
      }
      catch (e) {
        if (e.code === 'ENOENT') {
          this.alerts.cantFindProjectConfig();
        }
      }
    });
  }}

//# sourceMappingURL=status.js.map
exports.default = Status;