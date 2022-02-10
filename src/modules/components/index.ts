import Core from 'modules/core/index.js'
import Logs from 'utils/logs'

export default class Components extends Core {
  constructor(private logs: Logs) {
    super()
  }
  generate() {
    if (Core.isNuxtProject) console.log('generating component')
    else this.logs.cantFindNuxt()
  }
}
