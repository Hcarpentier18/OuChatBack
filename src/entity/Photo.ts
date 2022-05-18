import {Entity, BaseEntity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Photo extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    path: string;

}