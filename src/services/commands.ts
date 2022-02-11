import Components from 'modules/components'
import Status from 'modules/status'
import { ICommands } from 'types/commands'

export default class Commands implements ICommands {
  constructor(private status: Status, private generateComponents: Components) {}
  async health() {
    await this.status.checkNuxt()
    if (this.status.isNuxtApp) {
      await this.status.checkConfig()
    }
  }
  components() {
    this.generateComponents.generate()
  }
  init() {}
}
