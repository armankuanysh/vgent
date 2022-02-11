import { IConfig } from 'types/config'

export interface IStatus {
  checkNuxt(): Promise<void>
  checkConfig(): Promise<IConfig>
}
