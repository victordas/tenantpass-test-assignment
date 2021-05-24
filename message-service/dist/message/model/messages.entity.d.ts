import { ReplyEntity } from '../../reply/model/reply.entity';
export declare class MessageEntity {
    id: number;
    messageTitle: string;
    messageBody: string;
    messageIsRead: boolean;
    messageSentFrom: string;
    messageSentTo: string;
    messageSentAt: Date;
    replies: ReplyEntity[];
}
