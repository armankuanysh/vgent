export default class Alerts {
  constructor(chalk) {
    this.chalk = chalk;
  }
  cantFindNuxtOrVue() {
    console.error(`Can't find ${this.chalk.green('nuxt')} nor ${this.chalk.green('vue')} dependencies. Is this project on ${this.chalk.green('Nuxt.js')} or ${this.chalk.green('Vue.js')}?`);
  }
  cantFindProjectConfig() {
    console.error(`Can't find ${this.chalk.green('.nxrc')} configuration file.\nRun 'touch ${this.chalk.green('.nxrc')} and provide some configurations.`);
  }
  invalidProjectConfig() {
    console.error(`${this.chalk.red('Invalid config')}: seems ${this.chalk.green('.nxrc')} file has invalid options`);
  }}

//# sourceMappingURL=alerts.js.map