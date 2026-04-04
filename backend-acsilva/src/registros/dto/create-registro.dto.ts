/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsString, IsNotEmpty, IsNumber, IsDateString } from 'class-validator';

export class CreateRegistroDto {
  @IsString()
  @IsNotEmpty()
  colaborador: string;

  @IsDateString()
  data: string;

  @IsNumber()
  horas: number;

  @IsString()
  tempoFormatado: string;

  @IsString()
  @IsNotEmpty()
  obraId: string;
}
