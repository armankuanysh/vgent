import { resolve, join } from 'path';
import { readFile } from 'fs/promises';
export default class Settings {
  constructor() {
    this.config = {
      src: './',
      dir: {
        components: resolve(process.cwd(), '/components'),
        layout: resolve(process.cwd(), '/layout'),
        pages: resolve(process.cwd(), '/pages'),
        store: resolve(process.cwd(), '/store') },

      components: {
        atomicDesign: false,
        styleLang: 'scss',
        scriptLang: 'js',
        componentApi: 'optionsApi',
        detached: false,
        useIndex: true },

      pages: {
        useIndex: true } };


  }
  setSrc(src) {
    this.config.src = src;
  }
  setDir(dir) {
    this.config.dir = { ...this.config.dir, ...dir };
  }
  setComponents(components) {
    this.config.components = { ...this.config.components, ...components };
  }
  setPages(pages) {
    this.config.pages = { ...this.config.pages, ...pages };
  }
  async readLocalConfig() {
    try {
      const file = await readFile(join(process.cwd(), '/.vgentrc'), {
        encoding: 'utf8' });

      const config = JSON.parse(file);
      this.setSrc(config.src);
      this.setDir(config.dir);
      this.setComponents(config.components);
      this.setPages(config.pages);
    }
    catch (e) {
      console.error(e);
    }
  }}

//# sourceMappingURL=index.js.map