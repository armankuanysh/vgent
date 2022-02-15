import { access } from 'fs/promises';
export default class Core {
  constructor(settings) {
    this.settings = settings;
  }
  prepare() {
    this.src = this.settings.config.src;
    this.componentDir = this.settings.config.dir.components;
    this.pageDir = this.settings.config.dir.pages;
    this.script = this.settings.config.components.scriptLang;
    this.componentApi = this.settings.config.components.componentApi;
    this.style = this.settings.config.components.styleLang;
    this.componentIndex = this.settings.config.components.useIndex;
    this.pageIndex = this.settings.config.pages.useIndex;
    this.atomic = this.settings.config.components.atomicDesign;
  }
  capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
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