import { MessageEntity } from '../../message/model/messages.entity';
import { ManyToOne } from 'typeorm';
import { Column, Entity, PrimaryGeneratedColumn, JoinColumn } from 'typeorm';

@Entity('replies')
export class ReplyEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false })
    replyBody: string;

    @Column({ nullable: false })
    replyFrom: string

    @Column({
        type: 'timestamp',
        nullable: false,
        default: () => 'CURRENT_TIMESTAMP'
    })
    replySentAt: Date;

    @Column({ nullable: false })
    message_id: number;
}
