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

    @CreateDateColumn({ name: "created_at" })
    createdAt: Date;

    @UpdateDateColumn({ name: "updated_at" })
    updatedAt: Date;

    @ManyToOne((type) => Category, (category) => category.products)
    category: Category;

    @ManyToMany((type) => Order, (orders) => orders.products)
    orders: Order[];
}
