import { type } from "os";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
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

    @OneToMany(type => Payment, coupon => Coupon)
    payments: Payment[];
}
