import { join, dirname } from 'path'
import { writeFile, mkdir } from 'fs/promises'
import Core from 'modules/core/index.js'
import { IAlerts } from 'types/alerts'
import { IConfig } from 'types/config'
import { componentType, IGenerator } from 'types/generator'
import { ISettings } from 'types/settings'
import { component } from '../templates/index.js'

export default class Components extends Core implements IGenerator {
  private src: IConfig['src']
  private componentDir: IConfig['dir']['components']
  private script: IConfig['components']['scriptLang']
  private componentApi: IConfig['components']['componentApi']
  private style: IConfig['components']['styleLang']
  private index: IConfig['components']['useIndex']
  private atomic: IConfig['components']['atomicDesign']

  constructor(private alerts: IAlerts, settings: ISettings) {
    super(settings)
  }

  private prepare() {
    this.src = this.settings.config.src
    this.componentDir = this.settings.config.dir.components
    this.script = this.settings.config.components.scriptLang
    this.componentApi = this.settings.config.components.componentApi
    this.style = this.settings.config.components.styleLang
    this.index = this.settings.config.components.useIndex
    this.atomic = this.settings.config.components.atomicDesign
  }

  async generate(name: string, type?: componentType) {
    try {
      this.prepare()
      const boilerplate = component(
        name,
        this.componentApi,
        this.script,
        this.style
      )
      const indexed = this.index ? `${name}/index.vue` : `${name}.vue`
      const path = join(
        process.cwd(),
        this.src,
        this.componentDir,
        this.atomic ? `${type}/${indexed}` : indexed
      )
      const _dirname = dirname(path)
      const exists = await this.dirExists(_dirname)
      if (!exists) {
        await mkdir(_dirname, { recursive: true })
      }
      await writeFile(path, boilerplate, { encoding: 'utf8' })
      console.log(`The component ${indexed} has successfully generated!`)
    } catch (e) {
      console.error(
        `Something went wrong while generation of the ${name} component`,
        e
      )
    }
  }
}
