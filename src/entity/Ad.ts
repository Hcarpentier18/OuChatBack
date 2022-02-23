import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Ad {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    type: boolean;

    @Column()
    date: Date;


}