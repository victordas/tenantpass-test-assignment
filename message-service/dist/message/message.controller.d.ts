import { MessageDto } from './model/message.dto';
import { FetchMessageDto } from './model/fetch.dto';
import { MessageService } from './message.service';
export declare class MessageController {
    private messageService;
    constructor(messageService: MessageService);
    getMessages(body: FetchMessageDto): Promise<import("./model/messages.entity").MessageEntity[]>;
    getMessageById(id: number): Promise<import("./model/messages.entity").MessageEntity>;
    sendMessage(body: MessageDto): Promise<import("./model/messages.entity").MessageEntity>;
    markAsRead(id: number, body: MessageDto): Promise<any>;
    deleteMessage(id: number): Promise<any>;
}
