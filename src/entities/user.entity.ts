import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  adUserId: string;

  @Column()
  name: string;
  @Column()
  email: string;
  @Column()
  roles: string[];
  @Column()
  expertTitle: string;
  @Column()
  expertAvailability: boolean;
  @Column()
  expertStatus: string;
}