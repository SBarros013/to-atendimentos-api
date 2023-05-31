import { CreateDateColumn, DeleteDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'

export class BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  public id!: string

  @CreateDateColumn({ type: 'timestamp' })
  public createdAt!: Date

  @UpdateDateColumn({ type: 'timestamp' })
  public updatedAt!: Date

  @DeleteDateColumn({ type: 'timestamp', nullable: true })
  public deletedAt!: Date
}
