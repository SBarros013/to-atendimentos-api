import { Column, Entity, JoinTable, ManyToOne } from "typeorm"
import { BaseEntity } from "./base.entity";
import { User } from "./entities";

@Entity({ name: "health_ensurances"})
export class HealthEnsurance extends BaseEntity {
    @Column()
    name!: string

    @Column()
    value!: string

    @Column({ type: 'uuid', nullable: false })
    @JoinTable({ name: 'users' })
    public userId!: string

    @ManyToOne(() => User)
    public user!: User
}
