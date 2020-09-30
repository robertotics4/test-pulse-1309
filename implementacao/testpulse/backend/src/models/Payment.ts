import { type } from "os";
import {
    Column,
    CreateDateColumn,
    Entity,
    ManyToOne,
    OneToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from "typeorm";
import Coupon from "./Coupon";
import FormOfPayment from "./FormOfPayment";
import Order from "./Order";

@Entity()
export default class Payment {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ type: "decimal", precision: 5, scale: 2, nullable: false })
    amount: number;

    @Column({
        name: "discount_amount",
        type: "decimal",
        precision: 5,
        scale: 2,
        nullable: true,
    })
    discountAmount: number;

    @Column({
        name: "paid_amount",
        type: "decimal",
        precision: 5,
        scale: 2,
        nullable: false,
    })
    paidAmout: number;

    @CreateDateColumn({ name: "created_at" })
    createdAt: Date;

    @UpdateDateColumn({ name: "updated_at" })
    updatedAt: Date;

    @ManyToOne((type) => Coupon, (payments) => Payment)
    coupon: Coupon;

    @ManyToOne((type) => FormOfPayment, (payments) => Payment)
    formOfPayment: FormOfPayment;

    @OneToOne((type) => Order, (payment) => Payment)
    order: Order;
}
