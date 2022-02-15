import { IConfig } from 'types/config'

export interface ISettings {
  config: IConfig
  setSrc(src: IConfig['src']): void
  setDir(dir: IConfig['dir']): void
  setComponents(components: IConfig['components']): void
  setPages(pages: IConfig['pages']): void
  readLocalConfig(): Promise<void>
}
