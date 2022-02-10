export type scriptLang = 'js' | 'ts'
export type styleLang = 'css' | 'scss' | 'sass' | 'less'

export interface IConfig {
  atomicDesign?: boolean
  scriptLang?: scriptLang
  styleLang?: styleLang
}
