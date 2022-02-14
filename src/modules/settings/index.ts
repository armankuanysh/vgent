import { resolve } from 'path'
import { IConfig } from 'types/config'
import { ISettings } from 'types/settings'

export default class Settings implements ISettings {
  config: IConfig = {
    src: './',
    dir: {
      components: resolve(process.cwd(), '/components'),
      layout: resolve(process.cwd(), '/layout'),
      pages: resolve(process.cwd(), '/pages'),
      store: resolve(process.cwd(), '/store'),
    },
    components: {
      atomicDesign: false,
      styleLang: 'scss',
      scriptLang: 'js',
      optionsApi: true,
      detached: false,
      useIndex: true,
    },
  }

  setSrc(src: IConfig['src']) {
    this.config.src = src
  }

  setDir(dir: IConfig['dir']) {
    this.config.dir = { ...this.config.dir, ...dir }
  }

  setComponents(components: IConfig['components']) {
    this.config.components = { ...this.config.components, ...components }
  }
}
