import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Adress {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    city: string;

    @Column()
    postalcode: string;

    @Column()
    street: string;

    @Column()
    number: string;



}