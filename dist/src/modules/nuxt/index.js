import { resolve } from 'path';
export default class Nuxt {
  async readNuxtConfig() {
    const path = resolve(process.cwd() + '/nuxt.config.js');
    console.log('getting nuxt...');
    // const { default: nuxtConfig } = await import(path)
    console.log('got nuxt');
    return '';
  }}

//# sourceMappingURL=index.js.map