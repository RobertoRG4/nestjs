import { User } from '../entitys/User';

export abstract class UserRepository {
  abstract findByUsername(username: string): User | undefined;
  abstract updateUsername(user: User): string;
}
