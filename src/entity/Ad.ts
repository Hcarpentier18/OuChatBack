import {Entity, PrimaryGeneratedColumn, Column, OneToMany, OneToOne, ManyToMany, JoinColumn, JoinTable} from "typeorm";
import { Comment } from './Comment';
import { Animal } from './Animal';
import { User } from './User';
import { Adress } from './Adress';

@Entity()
export class Ad {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    type: boolean;

    @Column()
    date: Date;

    @OneToMany(type => Comment, comment => comment.ad)
    comments: Comment[];

    @OneToOne(type => Animal)
    @JoinColumn()
    animal: Animal;

    @ManyToMany(() => User)
    @JoinTable()
    users: User[];

    @OneToOne(type => Adress)
    @JoinColumn()
    adress: Adress;
}
