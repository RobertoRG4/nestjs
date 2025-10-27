/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class LoginHttpDto {
  @IsNotEmpty({ message: 'El campo idAplication no pueder estar vacio' })
  @IsInt({ message: 'Es necesario colocar un id de aplicacion valido.' })
  idAplication: number;

  @IsNotEmpty({ message: 'El campo username no pueder estar vacio' })
  @IsString({ message: 'Es necesario colocar un username valido.' })
  username: string;

  @IsNotEmpty({ message: 'El campo password no pueder estar vacio' })
  @IsString({ message: 'Es necesario colocar un password.' })
  password: string;
}
