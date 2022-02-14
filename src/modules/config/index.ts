import { writeFile, readFile } from 'fs/promises'
import { join } from 'path'
import Chalk from 'chalk'
import inquirer from 'inquirer'
import { IConfig } from 'types/config'
import { ISettings } from 'types/settings'

export default class Config {
  constructor(
    private inquirer: inquirer.Inquirer,
    private chalk: typeof Chalk,
    private config: ISettings
  ) {}

  private promtQuestions() {
    return {
      src: {
        type: 'input',
        name: 'src',
        message: 'Root of your project?',
        default: () => this.config.config.src,
      },
      scriptLang: {
        type: 'list',
        name: 'scriptLang',
        message: 'Language of scripts?',
        choices: ['js', 'ts'],
        default: () => this.config.config.components.scriptLang,
      },
      optionsApi: {
        type: 'confirm',
        name: 'optionsApi',
        message:
          'Use options API in your typescript component or class components?',
        default: () => this.config.config.components.optionsApi,
      },
      styleLang: {
        type: 'list',
        name: 'styleLang',
        message: 'CSS preprocessor?',
        choices: ['css', 'scss', 'sass', 'less'],
        default: () => this.config.config.components.styleLang,
      },
      useIndex: {
        type: 'confirm',
        name: 'useIndex',
        message: 'Use Component/index.vue format?',
        default: () => this.config.config.components.useIndex,
      },
      atomicDesign: {
        type: 'confirm',
        name: 'atomicDesign',
        message: 'Use atomic design file structure?',
        default: () => this.config.config.components.atomicDesign,
      },
    }
  }

  private async generateDefaultConfig(content: string) {
    try {
      await writeFile(join(process.cwd(), '.nxrc'), content, {
        encoding: 'utf8',
      })
      console.log(
        `${this.chalk.green('.nxrc')} configuration file has been generated`
      )
      console.log(`Now you can generate your components`)
    } catch (e) {
      console.error(
        `Something went wrong while generating configuration file`,
        e
      )
    }
  }

  private async setSrc() {
    const { src } = await this.inquirer.prompt([this.promtQuestions().src])
    this.config.setSrc(src)
  }

  private async setComponents() {
    const answers = {} as IConfig['components']
    const { scriptLang } = await this.inquirer.prompt([
      this.promtQuestions().scriptLang,
    ])
    answers.scriptLang = scriptLang

    if (answers.scriptLang === 'ts') {
      const { optionsApi } = await this.inquirer.prompt([
        this.promtQuestions().optionsApi,
      ])
      answers.optionsApi = optionsApi
    }

    const { styleLang } = await this.inquirer.prompt([
      this.promtQuestions().styleLang,
    ])
    answers.styleLang = styleLang

    const { useIndex } = await this.inquirer.prompt([
      this.promtQuestions().useIndex,
    ])
    answers.useIndex = useIndex || false

    const { atomicDesign } = await this.inquirer.prompt([
      this.promtQuestions().atomicDesign,
    ])
    answers.atomicDesign = atomicDesign || false

    this.config.setComponents(answers)
  }

  private getContent() {
    const { ...object } = this.config
    return JSON.stringify(object.config as IConfig, null, 2)
  }

  private async checkConfig() {
    try {
      const config = await readFile(join(process.cwd(), '.nxrc'), {
        encoding: 'utf8',
      })
      if (config) {
        const { rewrite } = await this.inquirer.prompt([
          {
            type: 'confirm',
            name: 'rewrite',
            message:
              'There is .nxrc configuration file. Do you want to rewrite it?',
          },
        ])

        return rewrite || false
      }
    } catch (e) {
      if (e.code === 'ENOENT') {
        return true
      }
    }
  }

  async quickstart() {
    const allowance = await this.checkConfig()
    if (!allowance) return
    this.generateDefaultConfig(this.getContent())
  }

  async promtUser() {
    const allowance = await this.checkConfig()
    if (!allowance) return
    await this.setSrc()
    await this.setComponents()

    this.generateDefaultConfig(this.getContent())
  }
}
