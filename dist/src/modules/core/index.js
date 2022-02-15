import { access } from 'fs/promises';
export default class Core {
  constructor(settings) {
    this.settings = settings;
  }
  prepare() {
    this.src = this.settings.config.src;
    this.componentDir = this.settings.config.dir.components;
    this.script = this.settings.config.components.scriptLang;
    this.componentApi = this.settings.config.components.componentApi;
    this.style = this.settings.config.components.styleLang;
    this.index = this.settings.config.components.useIndex;
    this.atomic = this.settings.config.components.atomicDesign;
  }
  async dirExists(path) {
    try {
      await access(path);
      return true;
    }
    catch {
      return false;
    }
  }}

Core.isNuxtProject = false;
//# sourceMappingURL=index.js.map