import { Module } from '@nestjs/common';
import { ResponsaveisService } from './responsaveis.service';
import { ResponsaveisController } from './responsaveis.controller';
import { PrismaService } from '../../prisma/prisma.service';

@Module({
  controllers: [ResponsaveisController],
  providers: [PrismaService, ResponsaveisService],
})
export class ResponsaveisModule {}
