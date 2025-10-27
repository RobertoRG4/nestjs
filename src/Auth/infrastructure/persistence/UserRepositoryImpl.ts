import { Injectable } from '@nestjs/common';
import { UserRepository } from 'src/Auth/domain/repository/UserRepository';
import { FullName } from 'src/Auth/domain/types/FullName';
import { Password } from 'src/Auth/domain/types/Password';
import { Username } from 'src/Auth/domain/types/Username';
import { User } from 'src/Auth/domain/entitys/User';
import { UserNotFound } from 'src/Auth/domain/exceptions/user-not-found';

@Injectable()
export class UserRepositoryImpl extends UserRepository {
  private readonly users: User[] = [
    new User(
      new Username('rromerog'),
      new Password('asdasd'),
      new FullName('asd'),
    ),
  ];

  findByUsername(username: string): User | undefined {
    const result = this.users.find((e) => e.username.value === username);

    if (!result) {
      throw new UserNotFound();
    }

    return result;
  }
  updateUsername(): string {
    throw new Error('Method not implemented.');
  }
}
