import { dirname, join } from 'path';
import { mkdir, writeFile } from 'fs/promises';
import Core from "../core/index.js";
import { component } from "../templates/component.js";
export default class Pages extends Core {
  constructor(chalk, settings, inquirer) {
    super(settings, inquirer);
    this.chalk = chalk;
  }
  pathToFile(name, type) {
    return this.pageIndex ?
    `${name}/${type !== 'index' ? `_${type}` : 'index'}.vue` :
    type === 'index' ?
    `${name}.vue` :
    `_${name}${this.capitalize(type)}.vue`;
  }
  async generate(name, type) {
    try {
      this.prepare();
      const boilerplate = component(type !== 'index' ?
      `${this.capitalize(name)}${this.capitalize(type)}` :
      this.capitalize(name), this.componentApi, this.script, this.style);
      const indexed = this.pathToFile(name, type);
      const path = join(process.cwd(), this.src, this.pageDir, indexed);
      const rewriteOrCreate = await this.rewriteModule(path, indexed);
      if (rewriteOrCreate) {
        const _dirname = dirname(path);
        const exists = await this.dirExists(_dirname);
        if (!exists) {
          await mkdir(_dirname, { recursive: true });
        }
        await writeFile(path, boilerplate, { encoding: 'utf8' });
        console.log(`The page ${this.chalk.green(indexed)} has successfully generated!`);
      } else
      {
        return;
      }
    }
    catch (e) {
      console.error(`Something went wrong while generation of the ${this.chalk.redBright(name)} page`, e);
    }
  }}

//# sourceMappingURL=index.js.map