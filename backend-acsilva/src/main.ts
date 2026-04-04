import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common'; // Importe isto

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Garante que o Nest valide os dados que vêm do Frontend automaticamente
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  app.enableCors({
    origin: 'http://localhost:5173',
    methods: 'GET,POST,PUT,DELETE,PATCH', // Adicionei PATCH porque usamos no update
    credentials: true,
  });

  await app.listen(3000);
}
void bootstrap();
