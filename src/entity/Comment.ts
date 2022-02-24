import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";
import { Ad } from './Ad';
import { User } from './User';

@Entity()
export class Comment {

    @PrimaryGeneratedColumn()
    id: number;

    @Column("text")
    content: string;

    @ManyToOne(type => Ad, ad => ad.comments)
    ad: Ad;

    @ManyToOne(type => User, user => user.comments)
    user: User;

}
