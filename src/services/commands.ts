import Components from 'modules/components'
import Status from 'modules/status'
import { ICommands } from 'types/commands'
import Core from 'modules/core/index.js'

export default class Commands implements ICommands {
  constructor(private status: Status, private generateComponents: Components) {}
  async health() {
    const isNuxtProject = await this.status.checkNuxt()
    if (isNuxtProject) {
      Core.isNuxtProject = isNuxtProject
      await this.status.checkConfig()
    }
  }
  components() {
    this.generateComponents.generate()
  }
  init() {}
}
