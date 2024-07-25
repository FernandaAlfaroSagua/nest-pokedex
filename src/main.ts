import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api/v2');
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true, // Transforma los datos a su tipo correspondiente
      transformOptions: {
        enableImplicitConversion: true, // Convierte los datos a su tipo correspondiente
      },
    }),
  );

  await app.listen(3000);
}
bootstrap();
