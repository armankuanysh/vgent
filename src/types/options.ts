import { Options } from 'yargs'

export interface IOptionDetails extends Options {}

export interface IOption {
  [key: string]: IOptionDetails
}
