import { join, dirname } from 'path';
import { writeFile, mkdir } from 'fs/promises';
import Core from "../core/index.js";
import { component } from "../templates/index.js";
export default class Components extends Core {
  constructor(alerts, settings) {
    super(settings);
    this.alerts = alerts;
  }
  prepare() {
    this.src = this.settings.config.src;
    this.componentDir = this.settings.config.dir.components;
    this.script = this.settings.config.components.scriptLang;
    this.componentApi = this.settings.config.components.componentApi;
    this.style = this.settings.config.components.styleLang;
    this.index = this.settings.config.components.useIndex;
    this.atomic = this.settings.config.components.atomicDesign;
  }
  async generate(name, type) {
    try {
      this.prepare();
      const boilerplate = component(name, this.componentApi, this.script, this.style);
      const indexed = this.index ? `${name}/index.vue` : `${name}.vue`;
      const path = join(process.cwd(), this.src, this.componentDir, this.atomic ? `${type}/${indexed}` : indexed);
      const _dirname = dirname(path);
      const exists = await this.dirExists(_dirname);
      if (!exists) {
        await mkdir(_dirname, { recursive: true });
      }
      await writeFile(path, boilerplate, { encoding: 'utf8' });
      console.log(`The component ${indexed} has successfully generated!`);
    }
    catch (e) {
      console.error(`Something went wrong while generation of the ${name} component`, e);
    }
  }}

//# sourceMappingURL=index.js.map