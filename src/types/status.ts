import { IConfig } from 'types/config'

export interface IStatus {
  checkNuxt(): Promise<boolean>
  checkConfig(): Promise<IConfig>
}
