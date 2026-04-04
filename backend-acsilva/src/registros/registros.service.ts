import { Injectable } from '@nestjs/common';
import { prisma } from '../../lib/prisma';
import { CreateRegistroDto } from './dto/create-registro.dto';

@Injectable()
export class RegistrosService {
  async create(data: CreateRegistroDto) {
    try {
      return await prisma.registo.create({
        data: {
          colaborador: data.colaborador,
          // Garante que a data seja um objeto Date válido
          data: new Date(data.data),
          horas: Number(data.horas), // Força ser número
          tempoFormatado: data.tempoFormatado,
          obraId: data.obraId,
        },
      });
    } catch (error) {
      console.error('Erro ao salvar no banco:', error);
      throw error;
    }
  }

  async findAll() {
    return prisma.registo.findMany({
      include: {
        obra: {
          include: { empresa: true },
        },
      },
      orderBy: { data: 'desc' },
    });
  }
}
