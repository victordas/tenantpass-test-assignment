import { ReplyEntity } from '../../reply/model/reply.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('messages')
export class MessageEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false })
    messageTitle: string;

    @Column({ nullable: false })
    messageBody: string;

    @Column({ default: false })
    messageIsRead: boolean;

    @Column()
    messageSentFrom: string;

    @Column()
    messageSentTo: string;

    @Column({
        type: 'timestamp',
        nullable: false,
        default: () => 'CURRENT_TIMESTAMP'
    })
    messageSentAt: Date;

    @OneToMany( type => ReplyEntity, reply => reply.id, {
        cascade: true
    })
    replies: ReplyEntity[];
}
