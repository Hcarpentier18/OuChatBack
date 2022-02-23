import {Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn} from "typeorm";
import { Comment } from './Comment';

@Entity()
export class Ad {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    type: boolean;

    @Column()
    date: Date;

    @OneToMany(type => Comment, Comment => Comment.ad)
    comments: Comment[];
}
