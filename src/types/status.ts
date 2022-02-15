import { IConfig } from 'types/config'

export interface IStatus {
  isNuxtApp: boolean
  isVueApp: boolean
  checkNuxtOrVue(): Promise<void>
  checkConfig(): Promise<IConfig>
}
