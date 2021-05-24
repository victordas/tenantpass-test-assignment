import { ReplyService } from './reply.service';
import { ReplyDto } from './model/reply.dto';
import { Body, Controller, Post, Query, Get } from '@nestjs/common';

@Controller('reply')
export class ReplyController {

    constructor( private replyService: ReplyService ) {}

    @Post()
    async sendReply(@Body() body: ReplyDto) {
        return this.replyService.create(body);
    }

    @Get()
    async getAllMyMessageId(@Query() query) {
      return this.replyService.getAll(query);
    }

}
