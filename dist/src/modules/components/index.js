import Core from '../core/index.js';
export default class Components extends Core {
    constructor(logs) {
        super();
        this.logs = logs;
    }
    generate() {
        if (Core.isNuxtProject)
        console.log('generating component');else

        this.logs.cantFindNuxt();
    }}

//# sourceMappingURL=index.js.map