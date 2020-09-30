import {
    Column,
    CreateDateColumn,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
} from "typeorm";
import Payment from "./Payment";

@Entity()
export default class Coupon {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column({ type: "varchar", length: 10, nullable: false, unique: true })
    code: string;

    @Column({ type: "text", nullable: false })
    description: string;

    @Column({ type: "decimal", precision: 5, scale: 2, nullable: false })
    discount: number;

    @CreateDateColumn({ name: "created_at" })
    createdAt: Date;

    @CreateDateColumn({ name: "updated_at" })
    updatedAt: Date;

    @OneToMany((type) => Payment, (coupon) => Coupon)
    payments: Payment[];
}
