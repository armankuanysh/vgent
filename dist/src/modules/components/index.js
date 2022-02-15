import { join, dirname } from 'path';
import { writeFile, mkdir } from 'fs/promises';
import Core from "../core/index.js";
import { component } from "../templates/component.js";
export default class Components extends Core {
  constructor(alerts, chalk, settings) {
    super(settings);
    this.alerts = alerts;
    this.chalk = chalk;
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
      console.log(`The component ${this.chalk.green(indexed)} has successfully generated!`);
    }
    catch (e) {
      console.error(`Something went wrong while generation of the ${this.chalk.redBright(name)} component`, e);
    }
  }}

//# sourceMappingURL=index.js.map