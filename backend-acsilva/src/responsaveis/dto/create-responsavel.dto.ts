/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsString, IsNotEmpty, IsUUID } from 'class-validator';

export class CreateResponsavelDto {
  @IsString()
  @IsNotEmpty()
  nome: string;

  @IsUUID('4') // Garante que o empresaId enviado é um UUID versão 4 válido
  @IsNotEmpty()
  empresaId: string;
}
