import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      //Elimina la data basura y solo deja la data que yo estoy esperando.
      whitelist: true,
      //Si mandan data diferente a la que espero arrojara un error, solo deja enviar lo que estoy esperando.
      forbidNonWhitelisted: true
    })
  )

  await app.listen(3000);
}
bootstrap();