import { join, dirname } from 'path'
import { writeFile, mkdir } from 'fs/promises'
import Core from 'modules/core/index.js'
import { IAlerts } from 'types/alerts'
import { IConfig } from 'types/config'
import { componentType, IGenerator } from 'types/generator'
import { ISettings } from 'types/settings'
import { component } from '../templates/component.js'
import Chalk from 'chalk'

export default class Components extends Core implements IGenerator {
  constructor(
    private alerts: IAlerts,
    private chalk: typeof Chalk,
    settings: ISettings
  ) {
    super(settings)
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
      console.log(
        `The component ${this.chalk.green(indexed)} has successfully generated!`
      )
    } catch (e) {
      console.error(
        `Something went wrong while generation of the ${this.chalk.redBright(
          name
        )} component`,
        e
      )
    }
  }
}
