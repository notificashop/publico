"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let MessageController = class MessageController {
    constructor(messageRepository) {
        this.messageRepository = messageRepository;
    }
    async create(message) {
        return this.messageRepository.create(message);
    }
    async count(where) {
        return this.messageRepository.count(where);
    }
    async find(filter) {
        return this.messageRepository.find(filter);
    }
    async updateAll(message, where) {
        return this.messageRepository.updateAll(message, where);
    }
    async findById(id, filter) {
        return this.messageRepository.findById(id, filter);
    }
    async updateById(id, message) {
        await this.messageRepository.updateById(id, message);
    }
    async replaceById(id, message) {
        await this.messageRepository.replaceById(id, message);
    }
    async deleteById(id) {
        await this.messageRepository.deleteById(id);
    }
};
(0, tslib_1.__decorate)([
    (0, rest_1.post)('/messages'),
    (0, rest_1.response)(200, {
        description: 'Message model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Message) } },
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Message, {
                    title: 'NewMessage',
                    exclude: ['id'],
                }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], MessageController.prototype, "create", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/messages/count'),
    (0, rest_1.response)(200, {
        description: 'Message model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    (0, tslib_1.__param)(0, rest_1.param.where(models_1.Message)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], MessageController.prototype, "count", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/messages'),
    (0, rest_1.response)(200, {
        description: 'Array of Message model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Message, { includeRelations: true }),
                },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.filter(models_1.Message)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], MessageController.prototype, "find", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/messages'),
    (0, rest_1.response)(200, {
        description: 'Message PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Message, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__param)(1, rest_1.param.where(models_1.Message)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [models_1.Message, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], MessageController.prototype, "updateAll", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/messages/{id}'),
    (0, rest_1.response)(200, {
        description: 'Message model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Message, { includeRelations: true }),
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, rest_1.param.filter(models_1.Message, { exclude: 'where' })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], MessageController.prototype, "findById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/messages/{id}'),
    (0, rest_1.response)(204, {
        description: 'Message PATCH success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Message, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, models_1.Message]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], MessageController.prototype, "updateById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.put)('/messages/{id}'),
    (0, rest_1.response)(204, {
        description: 'Message PUT success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, models_1.Message]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], MessageController.prototype, "replaceById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.del)('/messages/{id}'),
    (0, rest_1.response)(204, {
        description: 'Message DELETE success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], MessageController.prototype, "deleteById", null);
MessageController = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, repository_1.repository)(repositories_1.MessageRepository)),
    (0, tslib_1.__metadata)("design:paramtypes", [repositories_1.MessageRepository])
], MessageController);
exports.MessageController = MessageController;
//# sourceMappingURL=message.controller.js.map