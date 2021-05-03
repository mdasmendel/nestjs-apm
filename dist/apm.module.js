"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apm_service_1 = require("./apm.service");
const core_1 = require("@nestjs/core");
const apm_interceptor_1 = require("./apm.interceptor");
class ApmModule {
    static register() {
        return {
            module: ApmModule,
            imports: [],
            providers: [
                apm_service_1.ApmService,
                {
                    provide: core_1.APP_INTERCEPTOR,
                    useClass: apm_interceptor_1.ApmInterceptor
                }
            ],
            exports: [apm_service_1.ApmService]
        };
    }
}
exports.ApmModule = ApmModule;
