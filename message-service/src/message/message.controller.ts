import { MessageDto } from './model/message.dto';
import { FetchMessageDto } from './model/fetch.dto';
import { MessageService } from './message.service';
import { Body, Controller, Delete, Param, Post, Put, Get } from '@nestjs/common';

@Controller('message')
export class MessageController {
    constructor(private messageService: MessageService) {}

    @Post()
    async getMessages(@Body() body: FetchMessageDto) {
        return this.messageService.getAll(body)
    }

    @Get(':id')
    async getMessageById(@Param('id') id: number) {
        return this.messageService.getMessage(id)
    }

    @Post('send')
    async sendMessage(@Body() body: MessageDto) {
        return this.messageService.create(body);
    }

    @Put(':id')
    async markAsRead(@Param() id: number, @Body() body: MessageDto) {
        return this.messageService.update(id, body);
    }

    @Delete(':id')
    async deleteMessage(@Param() id: number) {
        return this.messageService.delete(id);
    }
}
