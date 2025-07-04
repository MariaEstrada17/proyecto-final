import {
  IsEmail,
  IsInt,
  IsNotEmpty,
  Min,
  IsArray,
  ArrayNotEmpty,
} from 'class-validator';

export class CreateEstudianteDto {
  @IsNotEmpty()
  nombre: string;

  @IsNotEmpty()
  apellido: string;

  @IsEmail()
  correo: string;

  @IsInt()
  @Min(1)
  edad: number;

  @IsArray()
  @ArrayNotEmpty()
  @IsInt({ each: true })
  cursoIds: number[];
}
