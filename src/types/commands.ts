import { componentType, pageType } from './generator'

export interface ICommands {
  health(init?: boolean): void
  components(name: string, type?: componentType): void
  pages(name: string, type?: pageType): void
  init(quickstart?: boolean): Promise<void>
}
