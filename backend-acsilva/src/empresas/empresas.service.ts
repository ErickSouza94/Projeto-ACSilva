import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateEmpresaDto } from './dto/create-empresa.dto'; // Importe o DTO

@Injectable()
export class EmpresasService {
  constructor(private prisma: PrismaService) {}

  async criarCompleto(dados: CreateEmpresaDto) {
    // Use o DTO aqui
    try {
      return await this.prisma.$transaction(async (tx) => {
        // 1. Procura a empresa pelo nome. Se existir, usa ela. Se não, cria.
        const empresa = await tx.empresa.upsert({
          where: { nome: dados.nome },
          update: {},
          create: { nome: dados.nome },
        });

        // 2. Criamos o Responsável associado a essa Empresa
        const novoResponsavel = await tx.responsavel.create({
          data: {
            nome: dados.responsavel,
            empresaId: empresa.id,
          },
        });

        // 3. Criamos a Obra associada à Empresa e ao Responsável
        return await tx.obra.create({
          data: {
            nome: dados.obraNome,
            empresaId: empresa.id,
            responsavelId: novoResponsavel.id,
          },
          include: {
            empresa: true,
            responsavel: true,
          },
        });
      });
    } catch (error) {
      console.error('Erro ao criar cadastro:', error);
      throw error;
    }
  }

  async findAll() {
    return this.prisma.empresa.findMany({
      orderBy: { nome: 'asc' },
      include: {
        obras: {
          include: {
            responsavel: true,
          },
        },
      },
    });
  }
}
