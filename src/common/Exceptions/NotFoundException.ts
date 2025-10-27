import { HttpException, HttpStatus } from '@nestjs/common';

export class NotFoundException extends HttpException {
  constructor(message: string = 'No encontrado') {
    super({ statusCode: HttpStatus.NOT_FOUND, message }, HttpStatus.NOT_FOUND);
  }
}
