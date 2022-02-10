/** dependencies */
import Chalk from 'chalk'
import Yargs from 'yargs'
/** modules */
import Status from 'modules/status/index.js'
import Components from 'modules/components/index.js'
/** services */
import Commands from 'services/commands.js'
import Shell from 'services/shell.js'
/** utils */
import Alerts from 'utils/alerts.js'

const chalk = Chalk

const logs = new Alerts(chalk)
const status = new Status(chalk, logs)
const components = new Components(logs)
const commands = new Commands(status, components)
const shell = new Shell(Yargs, chalk, commands)

export default shell
