export interface ICommands {
  health(init?: boolean): void
  components(): void
  init(quickstart?: boolean): Promise<void>
}
