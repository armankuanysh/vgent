export default class Alerts {
    constructor(chalk) {
        this.chalk = chalk;
    }
    cantFindNuxt() {
        console.error(`‼️ : Can't find ${this.chalk.green('nuxt')}. Is this project on ${this.chalk.green('Nuxt.js')}?`);
    }
    cantFindProjectConfig() {
        console.error(`Can't find ${this.chalk.green('.nxrc')} configuration file.\nRun 'touch ${this.chalk.green('.nxrc')} and provide some configurations.`);
    }
    invalidProjectConfig() {
        console.error(`${this.chalk.red('Invalid config')}: seems ${this.chalk.green('.nxrc')} file has invalid options`);
    }}

//# sourceMappingURL=alerts.js.map