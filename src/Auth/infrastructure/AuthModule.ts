import { Module } from '@nestjs/common';
import { AuthController } from './http-api/AuthController';
import { LoginUseCase } from '../application/use-cases/LoginUseCase';
import { UserRepositoryImpl } from './persistence/UserRepositoryImpl';
import { UserRepository } from '../domain/repository/UserRepository';

@Module({
  controllers: [AuthController],
  providers: [
    LoginUseCase,
    { provide: UserRepository, useClass: UserRepositoryImpl },
  ],
})
export class AuthModule {}
