import {
    Column,
    CreateDateColumn,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from "typeorm";
import Product from "./Product";

@Entity()
export default class Category {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column({ type: "varchar", length: 50, nullable: false, unique: true })
    name: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @OneToMany((type) => Product, (category) => Category)
    products: Product[];
}
