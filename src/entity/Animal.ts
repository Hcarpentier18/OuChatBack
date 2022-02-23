import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

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

}