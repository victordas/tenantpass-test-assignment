import { MessageEntity } from '../../message/model/messages.entity';
export interface ReplyDto {
    replyBody: string;
    replyFrom: string;
    replySentAt: Date;
    message_id: number;
}
