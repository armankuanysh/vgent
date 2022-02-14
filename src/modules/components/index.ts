import Core from 'modules/core/index.js'
import { IAlerts } from 'types/alerts'
import { IGenerator } from 'types/generator'

export default class Components extends Core implements IGenerator {
  constructor(private alerts: IAlerts) {
    super()
  }
  generate() {
    if (Core.isNuxtProject) console.log('generating component')
    else this.alerts.cantFindNuxt()
  }
}
