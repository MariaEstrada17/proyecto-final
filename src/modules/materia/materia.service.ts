import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Materia } from './entities/materia.entity';
import { CreateMateriaDto } from './dto/create-materia.dto';
import { UpdateMateriaDto } from './dto/update-materia.dto';
import { Curso } from '../curso/entities/curso.entity';
import { Profesor } from '../profesor/entities/profesor.entity';

@Injectable()
export class MateriaService {
  constructor(
    @InjectRepository(Materia)
    private materiaRepo: Repository<Materia>,

    @InjectRepository(Curso)
    private cursoRepo: Repository<Curso>,

    @InjectRepository(Profesor)
    private profesorRepo: Repository<Profesor>,
  ) {}

  async create(dto: CreateMateriaDto) {
    const curso = await this.cursoRepo.findOneBy({ id: dto.cursoId });
    if (!curso) throw new NotFoundException('Curso no encontrado');

    const profesor = await this.profesorRepo.findOneBy({ id: dto.profesorId });
    if (!profesor) throw new NotFoundException('Profesor no encontrado');

    const nueva = this.materiaRepo.create({
      nombre: dto.nombre,
      codigo: dto.codigo,
      creditos: dto.creditos,
      curso,
      profesor,
    });

    return this.materiaRepo.save(nueva);
  }

  findAll() {
    return this.materiaRepo.find({
      relations: ['curso', 'profesor'],
    });
  }

  async findOne(id: number) {
    const materia = await this.materiaRepo.findOne({
      where: { id },
      relations: ['curso', 'profesor'],
    });
    if (!materia) throw new NotFoundException('Materia no encontrada');
    return materia;
  }

  async update(id: number, dto: UpdateMateriaDto) {
    const materia = await this.findOne(id);

    if (dto.cursoId) {
      const curso = await this.cursoRepo.findOneBy({ id: dto.cursoId });
      if (!curso) throw new NotFoundException('Curso no encontrado');
      materia.curso = curso;
    }

    if (dto.profesorId) {
      const profesor = await this.profesorRepo.findOneBy({
        id: dto.profesorId,
      });
      if (!profesor) throw new NotFoundException('Profesor no encontrado');
      materia.profesor = profesor;
    }

    this.materiaRepo.merge(materia, dto);
    return this.materiaRepo.save(materia);
  }

  async remove(id: number) {
    await this.findOne(id);
    await this.materiaRepo.delete(id);
    return { message: 'Materia eliminada' };
  }
}
