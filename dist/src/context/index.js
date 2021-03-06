/** dependencies */
import Chalk from 'chalk';
import Yargs from 'yargs';
import inquirer from 'inquirer';
/** modules */
import Status from "../modules/status/index.js";
import Components from "../modules/components/index.js";
import Pages from "../modules/pages/index.js";
import Settings from "../modules/settings/index.js";
import Config from "../modules/config/index.js";
/** services */
import Commands from "../services/commands.js";
import Shell from "../services/shell.js";
/** utils */
import Alerts from "../utils/alerts.js";
const chalk = Chalk;
const _inquirer = inquirer;
const logs = new Alerts(chalk);
const status = new Status(chalk, logs);
const settings = new Settings();
const config = new Config(_inquirer, chalk, settings);
const components = new Components(chalk, _inquirer, settings);
const pages = new Pages(chalk, settings, inquirer);
const commands = new Commands(status, settings, components, pages, config, logs);
const shell = new Shell(Yargs, chalk, commands);
export default shell;
//# sourceMappingURL=index.js.map