import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  readonly id: number

  @Column()
  email: string

  @Column()
  password: string

  @Column()
  username: string
}