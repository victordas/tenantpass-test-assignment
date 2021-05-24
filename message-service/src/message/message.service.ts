import { FetchMessageDto } from './model/fetch.dto';
import { MessageEntity } from './model/messages.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class MessageService {
    constructor(
      @InjectRepository(MessageEntity) private readonly messageRepository: Repository<MessageEntity>
    ){}

    async getAll(condition: FetchMessageDto): Promise<MessageEntity[]> {
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

    async getMessage(id: number): Promise<MessageEntity> {
        return this.messageRepository.findOne(id);
    }

    async create(data): Promise<MessageEntity> {
        return this.messageRepository.save(data);
    }

    async update(id: number, data): Promise<any> {
        return this.messageRepository.update(id, data);
    }

    async delete(id: number): Promise<any> {
        return this.messageRepository.delete(id);
    }
}
