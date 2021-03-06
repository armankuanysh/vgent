import { resolve, join } from 'path'
import { readFile } from 'fs/promises'
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
      componentApi: 'optionsApi',
      detached: false,
      useIndex: true,
    },
    pages: {
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

  setPages(pages: IConfig['pages']) {
    this.config.pages = { ...this.config.pages, ...pages }
  }

  async readLocalConfig() {
    try {
      const file = await readFile(join(process.cwd(), '/.vgentrc'), {
        encoding: 'utf8',
      })
      const config = JSON.parse(file)
      this.setSrc(config.src)
      this.setDir(config.dir)
      this.setComponents(config.components)
      this.setPages(config.pages)
    } catch (e) {
      console.error(e)
    }
  }
}
