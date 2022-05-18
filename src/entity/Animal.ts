import {Entity, BaseEntity,PrimaryGeneratedColumn, Column, OneToOne, ManyToOne, JoinColumn} from "typeorm";
import { Photo } from './Photo';
import { User } from './User';

@Entity()
export class Animal extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    specie: string;

    @Column()
    race: string;

    @Column()
    color: string;

    @Column("text")
    description: string;

    @Column()
    situation: boolean;

    @Column()
    chip: string;

    @OneToOne(type => Photo)
    @JoinColumn()
    photo: Photo;

    @ManyToOne(type => User, user=>user.animals)
    user: User;
}
