import { Injectable } from '@nestjs/common';
import { HelloRepository } from 'src/hello/domain/repository/HelloRepository';
import { Saludo } from 'src/hello/domain/types/Saludo';

@Injectable()
export class HelloRepositoryImpl implements HelloRepository {
  hello(): Saludo {
    return new Saludo('hello wordl');
  }
}
