import { Inject, Injectable } from '@nestjs/common';
import type { HelloRepository } from 'src/hello/domain/repository/HelloRepository';
import { Saludo } from 'src/hello/domain/types/Saludo';

@Injectable()
export class Saludar {
  constructor(
    @Inject('HelloRepository') private readonly repository: HelloRepository,
  ) {}

  get(): Saludo {
    return this.repository.hello();
  }
}
