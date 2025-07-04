import { PartialType } from '@nestjs/mapped-types';
import { CreateEstudianteDto } from './create-estudiante.dto';
import { IsArray, IsInt, IsOptional } from 'class-validator';

export class UpdateEstudianteDto extends PartialType(CreateEstudianteDto) {
  @IsOptional()
  @IsArray({ message: 'cursoIds debe ser un arreglo de números' })
  @IsInt({ each: true, message: 'Cada cursoId debe ser un número entero' })
  cursoIds?: number[];
}
