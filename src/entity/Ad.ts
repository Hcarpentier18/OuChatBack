import {Entity, PrimaryGeneratedColumn, Column, OneToMany, OneToOne, ManyToMany, JoinColumn, JoinTable} from "typeorm";
import { Comment } from './Comment';
import { Animal } from './Animal';
import { User } from './User';
import { Adresse } from './Adresse';

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

    @OneToOne(type => Animal)
    @JoinColumn()
    animal: Animal;

    @ManyToMany(() => User)
    @JoinTable()
    users: User[];

    @OneToOne(type => Adresse)
    @JoinColumn()
    adress: Adresse;
}
