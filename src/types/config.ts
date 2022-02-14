export type scriptLang = 'js' | 'ts'
export type styleLang = 'css' | 'scss' | 'sass' | 'less'

export interface IDirOption {
  components?: string
  layout?: string
  pages?: string
  store?: string
}

export interface IComponentsOption {
  /** to make atomic design folder structure */
  atomicDesign?: boolean
  styleLang?: styleLang
  scriptLang?: scriptLang
  /** to use options API in components */
  optionsApi?: boolean
  /** to detach template, script, styles to separate files */
  detached?: boolean
  /** to use index files as component */
  useIndex?: boolean
}

export interface IConfig {
  src?: string
  dir?: IDirOption
  components?: IComponentsOption
}
