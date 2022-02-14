import { access } from 'fs/promises';
export default class Core {
  constructor(settings) {
    this.settings = settings;
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