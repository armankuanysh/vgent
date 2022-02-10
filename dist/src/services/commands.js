var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
    function adopt(value) {return value instanceof P ? value : new P(function (resolve) {resolve(value);});}
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {try {step(generator.next(value));} catch (e) {reject(e);}}
        function rejected(value) {try {step(generator["throw"](value));} catch (e) {reject(e);}}
        function step(result) {result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);}
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import Core from "../modules/core/index.js";
export default class Commands {
    constructor(status, generateComponents) {
        this.status = status;
        this.generateComponents = generateComponents;
    }
    health() {
        return __awaiter(this, void 0, void 0, function* () {
            const isNuxtProject = yield this.status.checkNuxt();
            if (isNuxtProject) {
                Core.isNuxtProject = isNuxtProject;
                yield this.status.checkConfig();
            }
        });
    }
    components() {
        this.generateComponents.generate();
    }
    init() {}}

//# sourceMappingURL=commands.js.map