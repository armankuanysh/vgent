import { readFile } from 'fs/promises';
export default class Status {
  constructor(chalk, alerts) {
    this.chalk = chalk;
    this.alerts = alerts;
    this._isNuxtApp = false;
  }
  get isNuxtApp() {
    return this._isNuxtApp;
  }
  set isNuxtApp(status) {
    this._isNuxtApp = status;
  }
  async checkNuxt() {
    try {
      const packageJsonText = await readFile(process.cwd() + '/package.json', {
        encoding: 'utf8' });

      const packageJson = JSON.parse(packageJsonText);
      if (packageJson &&
      packageJson.dependencies &&
      packageJson.dependencies.nuxt) {
        console.log(this.chalk.green(`nuxt ${packageJson.dependencies.nuxt}`));
        this.isNuxtApp = true;
      } else
      {
        this.alerts.cantFindNuxt();
        this.isNuxtApp = false;
      }
    }
    catch (e) {
      if (e.code === 'ENOENT') {
        this.alerts.cantFindNuxt();
      }
    }
  }
  async checkConfig() {
    try {
      const file = await readFile(process.cwd() + '/.nxrc', {
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
  }}

//# sourceMappingURL=index.js.map