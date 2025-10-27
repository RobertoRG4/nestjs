export default class LoginDto {
  public readonly idAplication: number;
  public readonly username: string;
  public readonly password: string;

  constructor(idAplication: number, username: string, password: string) {
    this.idAplication = idAplication;
    this.username = username;
    this.password = password;
  }
}
