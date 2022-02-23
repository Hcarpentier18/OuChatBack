import {Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn} from "typeorm";
import { Photo } from './Photo';

@Entity()
export class Animal {

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
}
