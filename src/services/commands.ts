import Config from 'modules/config'
import { ICommands } from 'types/commands'
import { IStatus } from 'types/status'
import { componentType, IGenerator } from 'types/generator'
import { ISettings } from 'types/settings'

export default class Commands implements ICommands {
  constructor(
    private status: IStatus,
    private settings: ISettings,
    private generateComponents: IGenerator,
    private configGenerator: Config
  ) {}
  async health(init?: boolean) {
    await this.status.checkNuxt()
    if (this.status.isNuxtApp && !init) {
      await this.status.checkConfig()
    }
  }
  async components(name: string, type?: componentType) {
    await this.health()
    await this.settings.readLocalConfig()
    await this.generateComponents.generate(name, type)
  }
  async init(quickstart?: boolean) {
    await this.health(true)
    if (quickstart) {
      this.configGenerator.quickstart()
    } else {
      await this.configGenerator.promtUser()
    }
  }
}
