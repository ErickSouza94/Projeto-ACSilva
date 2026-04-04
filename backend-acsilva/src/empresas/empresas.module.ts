import { Module } from '@nestjs/common';
import { EmpresasService } from './empresas.service';
import { EmpresasController } from './empresas.controller';
import { PrismaService } from '../../prisma/prisma.service'; // Verifique se o caminho está correto

@Module({
  controllers: [EmpresasController],
  providers: [EmpresasService, PrismaService], // O PrismaService PRECISA estar aqui
})
export class EmpresasModule {}
