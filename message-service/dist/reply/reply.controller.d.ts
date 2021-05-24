import { ReplyService } from './reply.service';
import { ReplyDto } from './model/reply.dto';
export declare class ReplyController {
    private replyService;
    constructor(replyService: ReplyService);
    sendReply(body: ReplyDto): Promise<import("./model/reply.entity").ReplyEntity>;
    getAllMyMessageId(query: any): Promise<import("./model/reply.entity").ReplyEntity[]>;
}
