import { resolve } from 'path';
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
        optionsApi: true,
        detached: false,
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
  }}

//# sourceMappingURL=index.js.map