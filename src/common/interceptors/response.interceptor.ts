import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Response } from 'express';

@Injectable()
export class ResponseInterceptor<T> implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const ctx = context.switchToHttp();
    const response = ctx.getResponse<Response>();

    return next.handle().pipe(
      map((data: T) => ({
        statusCode: response.statusCode,
        timestamp: new Date().toISOString(),
        data,
      })),
    );
  }
}
