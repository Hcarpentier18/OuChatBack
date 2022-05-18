import {Entity, BaseEntity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Adresse extends BaseEntity{

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
