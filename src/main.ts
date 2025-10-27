import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const prefix = process.env.NEXT_CONTEXT || '';
  const config = new DocumentBuilder()
    .setTitle('Api Generict')
    .setDescription('Simple api generic')
    .setVersion('1.0')
    .build();

  app.setGlobalPrefix(prefix);
  app.useGlobalPipes(new ValidationPipe());

  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup(`${prefix}/api/v1/swagger-ui/`, app, documentFactory);

  await app.listen(process.env.NEXT_PORT ? +process.env.NEXT_PORT : 3000);
}
bootstrap().catch((e) => console.error(e));
