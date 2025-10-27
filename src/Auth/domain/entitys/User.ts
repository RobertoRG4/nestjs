import { FullName } from '../types/FullName';
import { Password } from '../types/Password';
import { Username } from '../types/Username';

export class User {
  public username: Username;
  public password: Password;
  public fullName: FullName;

  constructor(username: Username, password: Password, fullName: FullName) {
    this.username = username;
    this.password = password;
    this.fullName = fullName;
  }
}
