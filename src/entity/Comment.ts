import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";
import { Ad } from './Ad';

@Entity()
export class Comment {

    @PrimaryGeneratedColumn()
    id: number;

    @Column("text")
    content: string;

    @ManyToOne(type => Ad, Ad => Ad.comments)
    ad: Ad;
}
