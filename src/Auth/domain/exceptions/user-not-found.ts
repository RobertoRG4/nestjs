export class UserNotFound extends Error {
  constructor(message: string = 'Usuario no encontrado') {
    super(message);
    this.name = 'UserNotFound';
  }
}
