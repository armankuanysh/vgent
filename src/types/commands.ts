import { componentType } from './generator'

export interface ICommands {
  health(init?: boolean): void
  components(name: string, type?: componentType): void
  init(quickstart?: boolean): Promise<void>
}
