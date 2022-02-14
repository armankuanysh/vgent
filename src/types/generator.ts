export type componentType = 'atoms' | 'molecules' | 'organisms' | 'templates'
export interface IGenerator {
  generate(name: string, type?: componentType): Promise<void>
}
