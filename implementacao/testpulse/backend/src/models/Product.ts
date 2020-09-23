import {
    Column,
    CreateDateColumn,
    Entity,
    ManyToMany,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from "typeorm";
import Category from "./Category";
import Order from "./Order";

@Entity()
export default class Product {
    @PrimaryGeneratedColumn("increment")
    id: string;

    @Column({ type: "varchar", length: 50, nullable: false, unique: true })
    name: string;

    @Column({ type: "decimal", precision: 5, scale: 2, nullable: false })
    price: number;

    @Column({ type: "text", nullable: true })
    description: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @ManyToOne((type) => Category, (products) => Product)
    category: Category;

    @ManyToMany((type) => Order, (products) => Product)
    orders: Order[];
}
