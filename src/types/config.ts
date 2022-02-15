export type scriptLang = 'js' | 'ts'
export type styleLang = 'css' | 'scss' | 'sass' | 'less'
export type componentApi = 'optionsApi' | 'compositionApi' | 'class'

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
  componentApi?: componentApi
  /** to detach template, script, styles to separate files */
  detached?: boolean
  /** to use index files as component */
  useIndex?: boolean
}

export interface IPagesOption {
  useIndex?: boolean
}

export interface IConfig {
  src?: string
  dir?: IDirOption
  components?: IComponentsOption
  pages?: IPagesOption
}
