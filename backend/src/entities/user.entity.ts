import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class User{

    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({nullable: false, length:50})
    fullname: string;

    @Column({nullable: false, length:50})
    username: string;

    @Column({length: 250})
    description: string;

    @CreatedDateColumn({name: 'created_at'})
    createdAt: Date;
}

function CreatedDateColumn(arg0: { name: string; }): (target: User, propertyKey: "createdAt") => void {
    throw new Error("Function not implemented.");
}
