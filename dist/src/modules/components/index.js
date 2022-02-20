import { join, dirname } from 'path';
import { writeFile, mkdir } from 'fs/promises';
import Core from "../core/index.js";
import { component } from "../templates/component.js";
export default class Components extends Core {
  constructor(chalk, inquirer, settings) {
    super(settings, inquirer);
    this.chalk = chalk;
  }
  pathToFile(name) {
    return this.componentIndex ? `${name}/index.vue` : `${name}.vue`;
  }
  async generate(name, type) {
    try {
      this.prepare();
      const boilerplate = component(name, this.componentApi, this.script, this.style);
      const indexed = this.pathToFile(name);
      const path = join(process.cwd(), this.src, this.componentDir, this.atomic ? `${type}/${indexed}` : indexed);
      const rewriteOrCreate = await this.rewriteModule(path, indexed);
      if (rewriteOrCreate) {
        const _dirname = dirname(path);
        const dirExists = await this.dirExists(_dirname);
        if (!dirExists) {
          await mkdir(_dirname, { recursive: true });
        }
        await writeFile(path, boilerplate, { encoding: 'utf8' });
        console.log(`The component ${this.atomic ? this.chalk.green(`${type}/`) : ''}${this.chalk.green(indexed)} has successfully generated!`);
      } else
      {
        return;
      }
    }
    catch (e) {
      console.error(`Something went wrong while generation of the ${this.chalk.redBright(name)} component`, e);
    }
  }}

//# sourceMappingURL=index.js.map