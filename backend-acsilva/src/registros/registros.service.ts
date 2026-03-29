import { Injectable } from '@nestjs/common';
import { prisma } from '../../lib/prisma';

@Injectable()
export class RegistrosService {
  constructor() {}

  async create(data: any) {
    return prisma.registo.create({
      data: {
        colaborador: data.colaborador,
        data: new Date(data.data), // Converte a string do input date
        horas: data.horas,
        tempoFormatado: data.tempoFormatado,
        obraId: data.obraId,
      },
    });
  }

  async findAll() {
    return prisma.registo.findMany({
      include: { 
        obra: { 
          include: { empresa: true } 
        } 
      },
      orderBy: { data: 'desc' }
    });
  }
}