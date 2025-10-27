import { UserRepository } from 'src/Auth/domain/repository/UserRepository';

export default class ChangePasswordUseCase {
  constructor(private readonly userRepository: UserRepository) {}
}
