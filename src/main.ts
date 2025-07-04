import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();

console.log(
  'Conectando a la base de datos con usuario:',
  process.env.DB_USERNAME,
);
console.log('Contraseña es:', process.env.DB_PASSWORD);
