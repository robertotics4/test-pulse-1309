import {
    Column,
    CreateDateColumn,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from "typeorm";
import Address from "./Address";
import Order from "./Order";

@Entity()
export default class Client {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ type: "varchar", length: 50, nullable: false })
    name: string;

    @Column({ type: "varchar", length: 14, nullable: false, unique: true })
    cpf: string;

    @Column({ type: "varchar", length: 50, nullable: false, unique: true })
    email: string;

    @Column({ type: "varchar", length: 15, nullable: false })
    phone: string;

    @CreateDateColumn({ name: "created_at" })
    createdAt: Date;

    @UpdateDateColumn({ name: "updated_at" })
    updatedAt: Date;

    @OneToMany((type) => Address, (addresses) => addresses.client, {
        cascade: true,
        eager: true,
    })
    addresses: Address[];

    @OneToMany((type) => Order, (orders) => orders.client)
    orders: Order[];
}
