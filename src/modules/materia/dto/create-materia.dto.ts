import { IsNotEmpty, IsInt, Min, IsPositive } from 'class-validator';

export class CreateMateriaDto {
  @IsNotEmpty({ message: 'El nombre es obligatorio' })
  nombre: string;

  @IsNotEmpty({ message: 'El código es obligatorio' })
  codigo: string;

  @IsInt({ message: 'Los créditos deben ser un número entero' })
  @Min(1, { message: 'Los créditos deben ser al menos 1' })
  creditos: number;

  @IsPositive({ message: 'Debe proporcionar un ID válido de curso' })
  cursoId: number;

  @IsPositive({ message: 'Debe proporcionar un ID válido de profesor' })
  profesorId: number;
}
