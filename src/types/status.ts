import { IConfig } from 'types/config'

export interface IStatus {
  isNuxtApp: boolean
  checkNuxt(): Promise<void>
  checkConfig(): Promise<IConfig>
}
