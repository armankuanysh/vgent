import Core from 'modules/core/index.js'
import { IAlerts } from 'types/alerts'

export default class Components extends Core {
  constructor(private alerts: IAlerts) {
    super()
  }
  generate() {
    if (Core.isNuxtProject) console.log('generating component')
    else this.alerts.cantFindNuxt()
  }
}
