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
exports.MessageEntity = void 0;
const reply_entity_1 = require("../../reply/model/reply.entity");
const typeorm_1 = require("typeorm");
let MessageEntity = class MessageEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], MessageEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ nullable: false }),
    __metadata("design:type", String)
], MessageEntity.prototype, "messageTitle", void 0);
__decorate([
    typeorm_1.Column({ nullable: false }),
    __metadata("design:type", String)
], MessageEntity.prototype, "messageBody", void 0);
__decorate([
    typeorm_1.Column({ default: false }),
    __metadata("design:type", Boolean)
], MessageEntity.prototype, "messageIsRead", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], MessageEntity.prototype, "messageSentFrom", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], MessageEntity.prototype, "messageSentTo", void 0);
__decorate([
    typeorm_1.Column({
        type: 'timestamp',
        nullable: false,
        default: () => 'CURRENT_TIMESTAMP'
    }),
    __metadata("design:type", Date)
], MessageEntity.prototype, "messageSentAt", void 0);
__decorate([
    typeorm_1.OneToMany(type => reply_entity_1.ReplyEntity, reply => reply.id, {
        cascade: true
    }),
    __metadata("design:type", Array)
], MessageEntity.prototype, "replies", void 0);
MessageEntity = __decorate([
    typeorm_1.Entity('messages')
], MessageEntity);
exports.MessageEntity = MessageEntity;
//# sourceMappingURL=messages.entity.js.map