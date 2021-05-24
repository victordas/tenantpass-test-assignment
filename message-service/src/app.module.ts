import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MessageModule } from './message/message.module';
import { ReplyModule } from './reply/reply.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'db',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'messages',
      autoLoadEntities: true,
      synchronize: true,
    }),
    MessageModule, 
    ReplyModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
