import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Estudiante } from './entities/estudiante.entity';
import { CreateEstudianteDto } from './dto/create-estudiante.dto';
import { UpdateEstudianteDto } from './dto/update-estudiante.dto';
import { Curso } from '../curso/entities/curso.entity';

@Injectable()
export class EstudianteService {
  constructor(
    @InjectRepository(Estudiante)
    private estudianteRepo: Repository<Estudiante>,

    @InjectRepository(Curso)
    private cursoRepo: Repository<Curso>,
  ) {}

  async create(dto: CreateEstudianteDto) {
    const { nombre, apellido, correo, edad, cursoIds } = dto;

    const cursos = await this.cursoRepo.findByIds(cursoIds);
    if (cursos.length !== cursoIds.length) {
      throw new NotFoundException('Uno o más cursos no existen');
    }

    const estudiante = this.estudianteRepo.create({
      nombre,
      apellido,
      correo,
      edad,
      cursos,
    });

    return this.estudianteRepo.save(estudiante);
  }

  findAll() {
    return this.estudianteRepo.find({
      relations: ['cursos'],
    });
  }

  async findOne(id: number) {
    const est = await this.estudianteRepo.findOne({
      where: { id },
      relations: ['cursos'],
    });
    if (!est) throw new NotFoundException('Estudiante no encontrado');
    return est;
  }

  async update(id: number, dto: UpdateEstudianteDto) {
    const estudiante = await this.findOne(id);

    if (dto.cursoIds) {
      const cursos = await this.cursoRepo.findByIds(dto.cursoIds);
      if (cursos.length !== dto.cursoIds.length) {
        throw new NotFoundException('Uno o más cursos no existen');
      }
      estudiante.cursos = cursos;
    }

    Object.assign(estudiante, dto);
    return this.estudianteRepo.save(estudiante);
  }

  async remove(id: number) {
    await this.findOne(id);
    await this.estudianteRepo.delete(id);
    return { message: 'Estudiante eliminado' };
  }
}
