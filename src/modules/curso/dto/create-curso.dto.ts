import { IsNotEmpty, IsInt, Min } from 'class-validator';

export class CreateCursoDto {
  @IsNotEmpty({ message: 'El nombre es obligatorio' })
  nombre: string;

  @IsNotEmpty({ message: 'La descripción es obligatoria' })
  descripcion: string;

  @IsInt({ message: 'La duración debe ser un número entero' })
  @Min(1, { message: 'La duración debe ser mayor a 0' })
  duracionHoras: number;
}
