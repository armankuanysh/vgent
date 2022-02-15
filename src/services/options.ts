import { IOption } from 'types/options.js'

export const options: IOption = {
  q: {
    alias: 'quickstart',
    describe: 'Generate config file with default configuration',
    type: 'boolean',
    demandOption: false,
  },
  c: {
    alias: 'component',
    describe: 'Generate component',
    type: 'string',
    demandOption: false,
  },
  a: {
    alias: 'atoms',
    describe:
      'Generate an atom component. Used when Atomic Design option is enabled',
    type: 'boolean',
    demandOption: false,
  },
  m: {
    alias: 'molecules',
    describe:
      'Generate a molecules component. Used when Atomic Design option is enabled',
    type: 'boolean',
    demandOption: false,
  },
  o: {
    alias: 'organisms',
    describe:
      'Generate an organism component. Used when Atomic Design option is enabled',
    type: 'boolean',
    demandOption: false,
  },
  t: {
    alias: 'templates',
    describe:
      'Generate a templates component. Used when Atomic Design option is enabled',
    type: 'boolean',
    demandOption: false,
  },
  p: {
    alias: 'page',
    describe: 'Generate page component',
    type: 'string',
    demandOption: false,
  },
  slug: {
    describe: 'Slug type of the page',
    type: 'boolean',
    demandOption: false,
  },
  id: {
    describe: 'ID type of the page',
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
