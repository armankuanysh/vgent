import Core from "../core/index.js";
export default class Components extends Core {
  constructor(alerts) {
    super();
    this.alerts = alerts;
  }
  generate() {
    if (Core.isNuxtProject)
    console.log('generating component');else

    this.alerts.cantFindNuxt();
  }}

//# sourceMappingURL=index.js.map