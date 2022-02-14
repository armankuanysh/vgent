import Config from 'modules/config'
import { ICommands } from 'types/commands'
import { IStatus } from 'types/status'
import { IGenerator } from 'types/generator'

export default class Commands implements ICommands {
  constructor(
    private status: IStatus,
    private generateComponents: IGenerator,
    private configGenerator: Config
  ) {}
  async health(init?: boolean) {
    await this.status.checkNuxt()
    if (this.status.isNuxtApp && !init) {
      await this.status.checkConfig()
    }
  }
  components() {
    this.generateComponents.generate()
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
