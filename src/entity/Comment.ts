import {Entity, BaseEntity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";
import { Ad } from './Ad';
import { User } from './User';

@Entity()
export class Comment extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column("text")
    content: string;

    @ManyToOne(type => Ad, Ad => Ad.comments)
    ad: Ad;

    @ManyToOne(type => User, User => User.comments)
    user: User;

}
