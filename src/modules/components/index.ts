import { join, dirname } from 'path'
import { writeFile, mkdir } from 'fs/promises'
import Core from 'modules/core/index.js'
import { IAlerts } from 'types/alerts'
import { IConfig } from 'types/config'
import { componentType, IGenerator } from 'types/generator'
import { ISettings } from 'types/settings'
import { component } from '../templates/component.js'
import Chalk from 'chalk'
import inquirer from 'inquirer'

export default class Components extends Core implements IGenerator {
  constructor(
    private chalk: typeof Chalk,
    inquirer: inquirer.Inquirer,
    settings: ISettings
  ) {
    super(settings, inquirer)
  }

  pathToFile(name: string) {
    return this.componentIndex ? `${name}/index.vue` : `${name}.vue`
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
      const indexed = this.pathToFile(name)
      const path = join(
        process.cwd(),
        this.src,
        this.componentDir,
        this.atomic ? `${type}/${indexed}` : indexed
      )
      const rewriteOrCreate = await this.rewriteModule(path, indexed)
      if (rewriteOrCreate) {
        const _dirname = dirname(path)
        const dirExists = await this.dirExists(_dirname)
        if (!dirExists) {
          await mkdir(_dirname, { recursive: true })
        }
        await writeFile(path, boilerplate, { encoding: 'utf8' })
        console.log(
          `The component ${this.chalk.green(
            indexed
          )} has successfully generated!`
        )
      } else {
        return
      }
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
