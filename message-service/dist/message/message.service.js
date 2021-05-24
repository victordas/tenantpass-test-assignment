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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageService = void 0;
const messages_entity_1 = require("./model/messages.entity");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let MessageService = class MessageService {
    constructor(messageRepository) {
        this.messageRepository = messageRepository;
    }
    async getAll(condition) {
        return this.messageRepository.find({
            where: [
                {
                    messageSentFrom: condition.username
                },
                {
                    messageSentTo: condition.username
                }
            ]
        });
    }
    async getMessage(id) {
        return this.messageRepository.findOne(id);
    }
    async create(data) {
        return this.messageRepository.save(data);
    }
    async update(id, data) {
        return this.messageRepository.update(id, data);
    }
    async delete(id) {
        return this.messageRepository.delete(id);
    }
};
MessageService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(messages_entity_1.MessageEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], MessageService);
exports.MessageService = MessageService;
//# sourceMappingURL=message.service.js.map