import { ReplyEntity } from './model/reply.entity';
import { Repository } from 'typeorm';
export declare class ReplyService {
    private readonly replyRepository;
    constructor(replyRepository: Repository<ReplyEntity>);
    getAll(condition: any): Promise<ReplyEntity[]>;
    create(data: any): Promise<ReplyEntity>;
    delete(id: number): Promise<any>;
}
