import { UserRepository } from 'src/Auth/domain/repository/UserRepository';
import LoginDto from '../dto/LoginDto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class LoginUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  execute(request: LoginDto) {
    this.userRepository.findByUsername(request.username);
    return { message: 'login exitoso' };
  }
}
