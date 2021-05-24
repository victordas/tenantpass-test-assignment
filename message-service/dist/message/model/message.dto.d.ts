import { ReplyEntity } from '../../reply/model/reply.entity';
export interface MessageDto {
    id?: number;
    messageTitle?: string;
    messageBody?: string;
    messageIsRead?: boolean;
    messageSentFrom?: string;
    messageSentTo?: string;
    messageSentAt?: Date;
    replies?: ReplyEntity[];
}
