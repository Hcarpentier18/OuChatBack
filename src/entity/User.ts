import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import { Comment } from "./comment";
import { Animal } from './Animal';
@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    pseudo: string;

    @Column()
    mail: string;

    @Column()
    password: string;

    @OneToMany(type => Comment, comment => comment.user)
    comments: Comment[];

    @OneToMany(type => Animal, animal => animal.user)
    animals: Animal;
}
