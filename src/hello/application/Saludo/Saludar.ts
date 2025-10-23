import { Inject, Injectable } from '@nestjs/common';
import type { HelloRepository } from 'src/hello/domain/repository/HelloRepository';
import { Saludo } from 'src/hello/domain/types/Saludo';
import { HELLO_REPOSITORY } from 'src/hello/infrastructure/constants';

@Injectable()
export class Saludar {
  constructor(
    @Inject(HELLO_REPOSITORY)
    private readonly repository: HelloRepository,
  ) {}

  get(): Saludo {
    return this.repository.hello();
  }
}
