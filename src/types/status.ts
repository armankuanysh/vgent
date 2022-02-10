export interface IStatus {
  checkNuxt(): Promise<boolean>
  checkConfig(): boolean
}