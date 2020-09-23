import { type } from "os";
import {
    Column,
    Entity,
    ManyToOne,
    OneToOne,
    PrimaryGeneratedColumn,
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

    @Column({ type: "decimal", precision: 5, scale: 2, nullable: true })
    discountAmount: number;

    @Column({ type: "decimal", precision: 5, scale: 2, nullable: false })
    paidAmout: number;

    @ManyToOne((type) => Coupon, (payments) => Payment)
    coupon: Coupon;

    @ManyToOne((type) => FormOfPayment, (payments) => Payment)
    formOfPayment: FormOfPayment;

    @OneToOne((type) => Order, (payment) => Payment)
    order: Order;
}
