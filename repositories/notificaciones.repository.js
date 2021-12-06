"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificacionesRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
const rest_1 = require("@loopback/rest");
let NotificacionesRepository = class NotificacionesRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource) {
        super(models_1.Notificaciones, dataSource);
    }
    async getAll() {
        let notificaciones = await super.find();
        let notifyArr = [];
        const axios = require('axios');
        try {
            notificaciones.forEach(async (item) => {
                /*  let venta = await this.ventasRepository.findById(item.id_venta);
                  let message = await this.messageRepository.findById(item.id_message);
                   notifyArr.push({
                     client: venta.nameCustomer,
                     phone: venta.phone,
                     email: venta.email,
                     produc: venta.nameProduc,
                     message: message.message,
                     type:item.type
                   });*/
            });
        }
        catch (err) {
            throw new rest_1.HttpErrors.UnprocessableEntity(err);
        }
        return notifyArr;
    }
};
NotificacionesRepository = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, core_1.inject)('datasources.mongo')),
    (0, tslib_1.__metadata)("design:paramtypes", [datasources_1.MongoDataSource])
], NotificacionesRepository);
exports.NotificacionesRepository = NotificacionesRepository;
//# sourceMappingURL=notificaciones.repository.js.map