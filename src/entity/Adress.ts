import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";
import { Ad } from './Ad';

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
