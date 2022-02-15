export type componentType = 'atoms' | 'molecules' | 'organisms' | 'templates'
export type pageType = 'index' | 'slug' | 'id'
export interface IGenerator {
  generate(name: string, type?: componentType | pageType): Promise<void>
}
