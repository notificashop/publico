"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VentasRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
const repository_2 = require("@loopback/repository");
const message_repository_1 = require("./message.repository");
const notificaciones_repository_1 = require("./notificaciones.repository");
const rest_1 = require("@loopback/rest");
//import * as twilio from 'twilio';
let VentasRepository = class VentasRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource, messageRepositoryGetter, messageRepository, notificacionesRepositoryGetter, notificacionesRepository) {
        super(models_1.Ventas, dataSource);
        this.messageRepository = messageRepository;
        this.notificacionesRepository = notificacionesRepository;
    }
    async apicreate(entity, hash) {
        let venta = new models_1.Ventas();
        try {
            if (hash === "B2yVur98^3$%ETqbNQuu2QcG3") {
                venta = await super.create(entity);
            }
            else {
                throw new rest_1.HttpErrors.UnprocessableEntity('Error con la llave de acceso a el api');
            }
        }
        catch (err) {
            throw new rest_1.HttpErrors.UnprocessableEntity(err);
        }
        return venta;
    }
    async sendMessage() {
        const accountSid = 'AC29b8f6d157eda58cd738dbec17d257de';
        const authToken = '8e825df0e189c8901484ead941141015';
        //let client  =  new twilio(accountSid, authToken);
        const twilio = require('twilio');
        var nodemailer = require('nodemailer');
        const client = new twilio(accountSid, authToken);
        let msg = await this.messageRepository.findOne();
        console.log(msg === null || msg === void 0 ? void 0 : msg.message);
        const ventas = await this.find();
        console.log(ventas.length);
        ventas.forEach(item => {
            console.log("Informa");
            let body = msg === null || msg === void 0 ? void 0 : msg.message.replace('{1}', item.nameCustomer);
            // body = body?.replace('{2}',item.);
            if (msg === null || msg === void 0 ? void 0 : msg.isWhatsapp) {
                client.messages
                    .create({
                    body: body,
                    to: 'whatsapp:' + item.phone,
                    from: 'whatsapp:+14155238886'
                })
                    .then(() => {
                    console.log("Se envio");
                    this.notificacionesRepository.create({
                        venta: { item },
                        message: { msg },
                        type: "Whatsapp"
                    });
                });
            }
            if (msg === null || msg === void 0 ? void 0 : msg.isEmail) {
                var transporter = nodemailer.createTransport({
                    service: 'gmail',
                    auth: {
                        user: 'notificashop@gmail.com',
                        pass: 'K0l0mb14'
                    }
                });
                var mailOptions = {
                    from: 'notificashop@gmail.com',
                    to: item.email,
                    subject: 'NotificaShop',
                    text: body
                };
                transporter.sendMail(mailOptions, (error, info) => {
                    if (error) {
                        console.log(error);
                    }
                    else {
                        this.notificacionesRepository.create({
                            venta: { item },
                            message: { msg },
                            type: "Email"
                        });
                        console.log('Email enviado: ' + info.response);
                    }
                });
            }
            if (msg === null || msg === void 0 ? void 0 : msg.isSms) {
                const accountSid = 'AC29b8f6d157eda58cd738dbec17d257de';
                const authToken = '[AuthToken]';
                const client = require('twilio')(accountSid, authToken);
                client.messages
                    .create({
                    to: item.phone
                })
                    .then((message) => {
                    this.notificacionesRepository.create({
                        venta: { item },
                        message: { msg },
                        type: "Whatsapp"
                    });
                    console.log(message.sid);
                })
                    .done();
            }
        });
    }
};
VentasRepository = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, core_1.inject)('datasources.mongo')),
    (0, tslib_1.__param)(1, repository_2.repository.getter(message_repository_1.MessageRepository)),
    (0, tslib_1.__param)(2, (0, repository_2.repository)(message_repository_1.MessageRepository)),
    (0, tslib_1.__param)(3, repository_2.repository.getter(notificaciones_repository_1.NotificacionesRepository)),
    (0, tslib_1.__param)(4, (0, repository_2.repository)(notificaciones_repository_1.NotificacionesRepository)),
    (0, tslib_1.__metadata)("design:paramtypes", [datasources_1.MongoDataSource, Function, message_repository_1.MessageRepository, Function, notificaciones_repository_1.NotificacionesRepository])
], VentasRepository);
exports.VentasRepository = VentasRepository;
//# sourceMappingURL=ventas.repository.js.map