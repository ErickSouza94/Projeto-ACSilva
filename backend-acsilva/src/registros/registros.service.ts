import { Injectable, NotFoundException } from '@nestjs/common';
import { prisma } from '../../lib/prisma';
import { CreateRegistroDto } from './dto/create-registro.dto';

@Injectable()
export class RegistrosService {
  async create(data: CreateRegistroDto) {
    try {
      return await prisma.registo.create({
        data: {
          colaborador: data.colaborador,
          data: new Date(data.data),
          horas: Number(data.horas),
          tempoFormatado: data.tempoFormatado,
          obraId: data.obraId,
          materiais: data.materiais, // <-- LINHA ADICIONADA
        },
        include: {
          obra: {
            include: {
              empresa: true,
            },
          },
        },
      });
    } catch (error) {
      console.error('Erro ao salvar no banco:', error);
      throw error;
    }
  }

  async remove(id: string) {
    try {
      return await prisma.registo.delete({
        where: { id },
      });
    } catch (error) {
      console.error('Erro ao excluir:', error);
      throw new NotFoundException(`Registo com ID ${id} não encontrado`);
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
