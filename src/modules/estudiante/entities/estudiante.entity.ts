import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Curso } from 'src/modules/curso/entities/curso.entity';

@Entity()
export class Estudiante {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  apellido: string;

  @Column()
  correo: string;

  @Column()
  edad: number;

  @ManyToMany(() => Curso, (curso) => curso.estudiantes)
  @JoinTable()
  cursos: Curso[];
}
