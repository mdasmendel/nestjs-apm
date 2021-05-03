"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const APM = require("elastic-apm-node");
let ApmService = class ApmService {
    constructor() {
        this.apm = APM;
    }
    captureError(data) {
        this.apm.captureError(data);
    }
    startTransaction(name, type) {
        return this.apm.startTransaction(name, type);
    }
    setTransactionName(name) {
        return this.apm.setTransactionName(name);
    }
    startSpan(name) {
        return this.apm.startSpan(name);
    }
    setCustomContext(context) {
        return this.apm.setCustomContext(context);
    }
    setTag(name, value) {
        return this.apm.setTag(name, value);
    }
};
ApmService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [])
], ApmService);
exports.ApmService = ApmService;
