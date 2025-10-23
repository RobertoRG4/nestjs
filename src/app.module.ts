import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { Saludar } from './hello/application/Saludo/Saludar';
import { HelloController } from './hello/infrastructure/http/controllers/hello.controller';
import { HelloRepositoryImpl } from './hello/infrastructure/implements/hello-repository.impl';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.env.${process.env.NODE_ENV || 'dev'}`,
      isGlobal: true,
    }),
  ],
  controllers: [HelloController],
  providers: [
    Saludar,
    { provide: 'HelloRepository', useClass: HelloRepositoryImpl },
  ],
})
export class AppModule {}
