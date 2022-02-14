export default class Commands {
  constructor(status, generateComponents, configGenerator) {
    this.status = status;
    this.generateComponents = generateComponents;
    this.configGenerator = configGenerator;
  }
  async health(init) {
    await this.status.checkNuxt();
    if (this.status.isNuxtApp && !init) {
      await this.status.checkConfig();
    }
  }
  components() {
    this.generateComponents.generate();
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