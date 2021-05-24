import { ReplyEntity } from './model/reply.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { ReplyController } from './reply.controller';
import { ReplyService } from './reply.service';

@Module({
  imports: [TypeOrmModule.forFeature([ReplyEntity])],
  controllers: [ReplyController],
  providers: [ReplyService],
  exports: [ReplyService]
})
export class ReplyModule {}
