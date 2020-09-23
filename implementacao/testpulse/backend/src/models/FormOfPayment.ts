import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Payment from "./Payment";

export enum TypePayment {
    A_VISTA = "à vista",
    A_PRAZO = "a prazo",
}

@Entity()
export default class FormOfPayment {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column({ type: "varchar", length: 50, nullable: false, unique: true })
    title: string;

    @Column({ type: "enum", enum: TypePayment, default: TypePayment.A_VISTA })
    type: TypePayment;

    @Column({ type: "int", nullable: true })
    installments: number;

    @OneToMany((type) => Payment, (formOfPayment) => FormOfPayment)
    payments: Payment[];
}
