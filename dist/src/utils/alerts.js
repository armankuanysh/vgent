export default class Alerts {
  constructor(chalk) {
    this.chalk = chalk;
  }
  cantFindNuxtOrVue() {
    console.error(`Can't find ${this.chalk.green('nuxt')} nor ${this.chalk.green('vue')} dependencies. Is this project on ${this.chalk.green('Nuxt.js')} or ${this.chalk.green('Vue.js')}?`);
  }
  cantFindProjectConfig() {
    console.error(`Can't find ${this.chalk.green('.vgentrc')} configuration file.\nRun ${this.chalk.green('vgent init')} and provide some configurations.\n`);
  }
  invalidProjectConfig() {
    console.error(`${this.chalk.red('Invalid config')}: seems ${this.chalk.green('.vgentrc')} file has invalid options`);
  }
  initInstruction() {
    console.log(`To generate a component run: ${this.chalk.greenBright('vgent make -c <component_name>')}`, `\nTo generate a page run: ${this.chalk.greenBright('vgent make -p <page_name>')}`);
  }}

//# sourceMappingURL=alerts.js.map