import { Saludo } from '../types/Saludo';

export interface HelloRepository {
  hello(): Saludo;
}
