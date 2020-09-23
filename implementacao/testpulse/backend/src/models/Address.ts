import {
    Column,
    CreateDateColumn,
    Entity,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from "typeorm";
import Client from "./Client";

@Entity()
export default class Address {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column({ type: "varchar", length: 50, nullable: false })
    title: string;

    @Column({ type: "varchar", length: 80, nullable: false })
    street: string;

    @Column({ type: "int", nullable: false })
    number: number;

    @Column({ type: "varchar", length: 50, nullable: true })
    complement: string;

    @Column({ type: "varchar", length: 50, nullable: false })
    district: string;

    @Column({ type: "varchar", length: 50, nullable: false })
    state: string;

    @Column({ type: "varchar", length: 50, nullable: false })
    city: string;

    @Column({ type: "varchar", length: 80, nullable: false })
    reference: string;

    @Column({ type: "varchar", length: 9, nullable: false, unique: true })
    cep: string;

    @Column({ type: "bool", default: true })
    is_first: boolean;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @ManyToOne((type) => Client, (addresses) => Address)
    client: Client;
}
