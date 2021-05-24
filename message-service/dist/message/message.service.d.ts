import { FetchMessageDto } from './model/fetch.dto';
import { MessageEntity } from './model/messages.entity';
import { Repository } from 'typeorm';
export declare class MessageService {
    private readonly messageRepository;
    constructor(messageRepository: Repository<MessageEntity>);
    getAll(condition: FetchMessageDto): Promise<MessageEntity[]>;
    getMessage(id: number): Promise<MessageEntity>;
    create(data: any): Promise<MessageEntity>;
    update(id: number, data: any): Promise<any>;
    delete(id: number): Promise<any>;
}
