import { ReplyEntity } from './model/reply.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ReplyService {
    constructor(@InjectRepository(ReplyEntity) private readonly replyRepository: Repository<ReplyEntity>) {}

    async getAll(condition): Promise<ReplyEntity[]> {
        return this.replyRepository.find(condition);
    }

    async create(data): Promise<ReplyEntity> {
        return this.replyRepository.save(data);
    }

    async delete(id: number): Promise<any> {
        return this.replyRepository.delete(id);
    }
}
