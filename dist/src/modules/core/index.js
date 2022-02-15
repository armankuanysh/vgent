import { access } from 'fs/promises';
import inquirer from 'inquirer';
export default class Core {
  constructor(settings, inquirer) {
    this.settings = settings;
    this.inquirer = inquirer;
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
  }
  async rewriteModule(path, name) {
    const exists = await this.dirExists(path);
    if (exists) {
      const { rewrite } = await inquirer.prompt({
        type: 'confirm',
        name: 'rewrite',
        message: `File ${name} is exist. Do you want to rewrite file?` });

      return rewrite;
    }
    return true;
  }}

Core.isNuxtProject = false;
//# sourceMappingURL=index.js.map