/** dependencies */
import Chalk from 'chalk'
import Yargs from 'yargs'
/** modules */
import Status from 'modules/status.js'
import Components from 'modules/components/index.js'
/** services */
import Commands from 'services/commands.js'
import Shell from 'services/shell.js'
/** utils */
import Logs from 'utils/logs.js'

const chalk = Chalk

const logs = new Logs(chalk)
const status = new Status(chalk, logs)
const components = new Components(logs)
const commands = new Commands(status, components)
const shell = new Shell(Yargs, chalk, commands)

export default shell
