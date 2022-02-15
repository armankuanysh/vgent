export default class Commands {
  constructor(status, settings, generateComponents, configGenerator) {
    this.status = status;
    this.settings = settings;
    this.generateComponents = generateComponents;
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