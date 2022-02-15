export default class Commands {
  constructor(status, settings, generateComponents, generatePages, configGenerator, alerts) {
    this.status = status;
    this.settings = settings;
    this.generateComponents = generateComponents;
    this.generatePages = generatePages;
    this.configGenerator = configGenerator;
    this.alerts = alerts;
  }
  async health(init) {
    await this.status.checkNuxtOrVue();
    if ((this.status.isNuxtApp || this.status.isVueApp) && !init) {
      await this.status.checkConfig();
    }
  }
  async components(name, type) {
    await this.health();
    await this.settings.readLocalConfig();
    await this.generateComponents.generate(name, type);
  }
  async pages(name, type) {
    await this.health();
    await this.settings.readLocalConfig();
    await this.generatePages.generate(name, type);
  }
  async init(quickstart) {
    await this.health(true);
    if (quickstart) {
      this.configGenerator.quickstart();
    } else
    {
      await this.configGenerator.promtUser();
    }
  }
  async placeholder() {
    await this.health();
    if (this.status.isNuxtApp || this.status.isVueApp) {
      this.alerts.initInstruction();
    }
  }}

//# sourceMappingURL=commands.js.map