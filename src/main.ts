import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ResponseInterceptor } from './common/interceptors/response.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const prefix = process.env.NEXT_CONTEXT || '';

  app.setGlobalPrefix(`api/v1/${prefix}`);
  app.useGlobalInterceptors(new ResponseInterceptor());

  await app.listen(process.env.NEXT_PORT ? +process.env.NEXT_PORT : 3000);
}
bootstrap().catch((e) => console.log(e));
