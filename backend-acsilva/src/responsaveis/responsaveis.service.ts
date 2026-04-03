/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Injectable } from '@nestjs/common';
import { prisma } from '../../lib/prisma';
import { CreateResponsavelDto } from './dto/create-responsavel.dto';
import { UpdateResponsavelDto } from './dto/update-responsavel.dto';

@Injectable()
export class ResponsaveisService {
  constructor() {}

  create(createResponsavelDto: CreateResponsavelDto) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    return prisma.responsavel.create({
      data: {
        nome: createResponsavelDto.nome,
        empresaId: createResponsavelDto.empresaId,
      },
    });
  }

  findAll() {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    return prisma.responsavel.findMany({
      include: { empresa: true },
    });
  }

  findOne(id: number) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    return prisma.responsavel.findUnique({
      where: { id },
      include: { empresa: true, obras: true },
    });
  }

  update(id: number, updateResponsavelDto: UpdateResponsavelDto) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    return prisma.responsavel.update({
      where: { id },
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      data: updateResponsavelDto,
    });
  }

  remove(id: number) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    return prisma.responsavel.delete({
      where: { id },
    });
  }
}
