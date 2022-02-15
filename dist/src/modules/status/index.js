import { readFile } from 'fs/promises';
export default class Status {
  constructor(chalk, alerts) {
    this.chalk = chalk;
    this.alerts = alerts;
    this._isNuxtApp = false;
    this._isVueApp = false;
  }
  get isNuxtApp() {
    return this._isNuxtApp;
  }
  set isNuxtApp(status) {
    this._isNuxtApp = status;
  }
  get isVueApp() {
    return this._isVueApp;
  }
  set isVueApp(status) {
    this._isVueApp = status;
  }
  async checkNuxtOrVue() {
    try {
      const packageJsonText = await readFile(process.cwd() + '/package.json', {
        encoding: 'utf8' });

      const packageJson = JSON.parse(packageJsonText);
      if (packageJson &&
      packageJson.dependencies &&
      packageJson.dependencies.nuxt) {
        console.log(this.chalk.green(`nuxt ${packageJson.dependencies.nuxt}`));
        this._isNuxtApp = true;
      } else
      if (packageJson &&
      packageJson.dependencies &&
      packageJson.dependencies.vue) {
        console.log(this.chalk.green(`vue ${packageJson.dependencies.vue}`));
        this._isVueApp = true;
      } else
      {
        this.alerts.cantFindNuxtOrVue();
        this._isNuxtApp = false;
        this._isVueApp = false;
      }
    }
    catch (e) {
      if (e.code === 'ENOENT') {
        this.alerts.cantFindNuxtOrVue();
      }
    }
  }
  async checkConfig() {
    try {
      const file = await readFile(process.cwd() + '/.vgentrc', {
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