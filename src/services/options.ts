import { IOption } from 'types/options.js'

export const options: IOption = {
  c: {
    alias: 'component',
    describe: 'Generate component',
    type: 'boolean',
    demandOption: false,
  },
  p: {
    alias: 'page',
    describe: 'Generate page component',
    type: 'boolean',
    demandOption: false,
  },
  s: {
    alias: 'store',
    describe: 'Generate store module',
    type: 'boolean',
    demandOption: false,
  },
}
