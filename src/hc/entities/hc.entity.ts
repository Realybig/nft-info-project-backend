import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Hc {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  age: number;

  @Column()
  skill: string;
}
