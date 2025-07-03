import { IsNotEmpty, IsEmail } from 'class-validator';

export class CreateProfesorDto {
  @IsNotEmpty({ message: 'El nombre es obligatorio' })
  nombre: string;

  @IsNotEmpty({ message: 'El apellido es obligatorio' })
  apellido: string;

  @IsNotEmpty({ message: 'La especialidad es obligatoria' })
  especialidad: string;

  @IsEmail({}, { message: 'Correo no válido' })
  correo: string;
}
