import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany } from "typeorm"
import { HealthEnsurance } from "./healthEnsurance.entity"

@Entity()
export class User extends BaseEntity {

    @Column()
    name!: string

    @Column()
    email!: string

    @Column()
    cpf!: number

    @Column()
    password!: string

    @Column()
    activeUntil!: Date

    @Column()
    paidAt!: Date

    @OneToMany(() => HealthEnsurance, (healthEnsurance) => healthEnsurance.user)
    public healthEnsurances!: HealthEnsurance[]

}
