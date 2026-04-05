import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateEmpresaDto } from './dto/create-empresa.dto';

@Injectable()
export class EmpresasService {
  constructor(private prisma: PrismaService) {}

  async criarCompleto(dados: CreateEmpresaDto) {
    try {
      return await this.prisma.$transaction(async (tx) => {
        // 1. Procura a empresa pelo nome ou cria
        const empresa = await tx.empresa.upsert({
          where: { nome: dados.nome },
          update: {},
          create: { nome: dados.nome },
        });

        // 2. Criamos o Responsável associado
        const novoResponsavel = await tx.responsavel.create({
          data: {
            nome: dados.responsavel,
            empresaId: empresa.id,
          },
        });

        // 3. Criamos a Obra associada
        return await tx.obra.create({
          data: {
            nome: dados.obraNome,
            empresaId: empresa.id,
            responsavelId: novoResponsavel.id,
            // O campo 'concluida' já inicia como false por padrão do Banco
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

  // Lista todas as empresas e inclui o campo 'concluida' das obras
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

  /**
   * ATUALIZAÇÃO: Altera o status da obra no banco de dados
   */
  async atualizarStatusObra(id: string, concluida: boolean) {
    return await this.prisma.obra.update({
      where: { id },
      data: { concluida },
    });
  }
}
