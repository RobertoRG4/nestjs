import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Saludar } from 'src/hello/application/Saludo/Saludar';

@ApiTags('Hello')
@Controller('/hello')
export class HelloController {
  constructor(private readonly saludar: Saludar) {}

  @Get()
  getHello(): string {
    return this.saludar.get().value;
  }
}
