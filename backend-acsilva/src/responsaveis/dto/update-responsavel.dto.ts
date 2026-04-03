// src/responsaveis/dto/update-responsavel.dto.ts
import { PartialType } from '@nestjs/mapped-types';
import { CreateResponsavelDto } from './create-responsavel.dto';

export class UpdateResponsavelDto extends PartialType(CreateResponsavelDto) {}
