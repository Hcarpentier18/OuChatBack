import {Entity, BaseEntity,PrimaryGeneratedColumn, Column, OneToMany, OneToOne, ManyToMany, JoinColumn, JoinTable, ManyToOne} from "typeorm";
import { Comment } from './Comment';
import { Animal } from './Animal';
import { User } from './User';
import { Adresse } from './Adresse';

@Entity()
export class Ad extends BaseEntity{

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
    animals: Animal;

    @ManyToOne(() => User)
    @JoinTable()
    users: User[];

    @OneToOne(type => Adresse)
    @JoinColumn()
    adresses: Adresse;
}
