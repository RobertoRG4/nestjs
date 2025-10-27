import {
  Body,
  Controller,
  HttpStatus,
  Post,
  Res,
  UseFilters,
} from '@nestjs/common';
import type { Response } from 'express';
import { LoginUseCase } from 'src/Auth/application/use-cases/LoginUseCase';
import ApiResponse from 'src/common/ApiResponse';
import { UserNotFoundFilter } from 'src/Auth/infrastructure/filters/http-exception-user.filter';
import { LoginHttpDto } from '../dto/LoginHttpDto';

@Controller('/v1/auth')
export class AuthController {
  constructor(private readonly loginUseCase: LoginUseCase) {}

  @Post('/login')
  @UseFilters(UserNotFoundFilter)
  login(@Body() request: LoginHttpDto, @Res() response: Response) {
    const result = this.loginUseCase.execute(request);
    return response
      .status(200)
      .json(new ApiResponse(HttpStatus.OK, 200, result));
  }
}
