import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Validação global de DTOs
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  // Configuração de CORS ajustada
  app.enableCors({
    origin: 'https://projeto-ac-silva.vercel.app',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
    allowedHeaders: 'Content-Type, Accept, Authorization',
  });

  // O Render define a porta automaticamente via variável de ambiente
  await app.listen(process.env.PORT || 3000);
}

// Em algumas versões do Nest, o 'void' pode ser omitido, mas não causa erro.
void bootstrap();
