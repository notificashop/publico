"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Notificaciones = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let Notificaciones = class Notificaciones extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'object',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", Object)
], Notificaciones.prototype, "venta", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'object',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", Object)
], Notificaciones.prototype, "message", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        id: true,
        generated: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Notificaciones.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Notificaciones.prototype, "type", void 0);
Notificaciones = (0, tslib_1.__decorate)([
    (0, repository_1.model)({ settings: { strict: false } }),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], Notificaciones);
exports.Notificaciones = Notificaciones;
//# sourceMappingURL=notificaciones.model.js.map