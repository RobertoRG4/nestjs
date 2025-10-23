import { Controller, Get } from '@nestjs/common';
import { Saludar } from 'src/hello/application/Saludo/Saludar';

@Controller()
export class HelloController {
  constructor(private readonly saludar: Saludar) {}

  @Get()
  getHello(): string {
    return this.saludar.get().value;
  }
}
