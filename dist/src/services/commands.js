export default class Commands {
  constructor(status, settings, generateComponents, generatePages, configGenerator) {
    this.status = status;
    this.settings = settings;
    this.generateComponents = generateComponents;
    this.generatePages = generatePages;
    this.configGenerator = configGenerator;
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
  }}

//# sourceMappingURL=commands.js.map