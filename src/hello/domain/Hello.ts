import { Saludo } from './types/Saludo';

export class Hello {
  public readonly saludo: Saludo;

  constructor(saludo: Saludo) {
    this.saludo = saludo;
  }
}
