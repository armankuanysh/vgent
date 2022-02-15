import { dirname, join } from 'path'
import { mkdir, writeFile } from 'fs/promises'
import Chalk from 'chalk'
import Core from 'modules/core/index.js'
import { component } from 'modules/templates/component.js'
import { IGenerator, pageType } from 'types/generator'
import { ISettings } from 'types/settings'

export default class Pages extends Core implements IGenerator {
  constructor(private chalk: typeof Chalk, settings: ISettings) {
    super(settings)
  }

  pathToFile(name: string, type: pageType) {
    return this.pageIndex
      ? `${name}/${type !== 'index' ? `_${type}` : 'index'}.vue`
      : type === 'index'
      ? `${name}.vue`
      : `_${name}${this.capitalize(type)}.vue`
  }

  async generate(name: string, type?: pageType) {
    try {
      this.prepare()
      const boilerplate = component(
        type !== 'index'
          ? `${this.capitalize(name)}${this.capitalize(type)}`
          : this.capitalize(name),
        this.componentApi,
        this.script,
        this.style
      )
      const indexed = this.pathToFile(name, type)
      const path = join(process.cwd(), this.src, this.pageDir, indexed)
      const _dirname = dirname(path)
      const exists = await this.dirExists(_dirname)
      if (!exists) {
        await mkdir(_dirname, { recursive: true })
      }
      await writeFile(path, boilerplate, { encoding: 'utf8' })
      console.log(
        `The page ${this.chalk.green(indexed)} has successfully generated!`
      )
    } catch (e) {
      console.error(
        `Something went wrong while generation of the ${this.chalk.redBright(
          name
        )} page`,
        e
      )
    }
  }
}
