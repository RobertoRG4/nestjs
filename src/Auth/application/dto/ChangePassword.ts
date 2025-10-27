export default class ChangePassword {
  public readonly username: string;
  public readonly password: string;
  public readonly newPassword: string;

  constructor(username: string, password: string, newPassword: string) {
    this.username = username;
    this.password = password;
    this.newPassword = newPassword;
  }
}
