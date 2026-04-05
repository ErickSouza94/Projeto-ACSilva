/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Controller, Get, Post, Body, Patch, Param } from '@nestjs/common';
import { EmpresasService } from './empresas.service';
import { CreateEmpresaDto } from './dto/create-empresa.dto';

@Controller('empresas')
export class EmpresasController {
  constructor(private readonly empresasService: EmpresasService) {}

  // Rota para criar Empresa + Obra (Painel Admin)
  @Post('completo')
  async create(@Body() createEmpresaDto: CreateEmpresaDto) {
    return await this.empresasService.criarCompleto(createEmpresaDto);
  }

  // Lista todas as empresas e obras
  @Get()
  async findAll() {
    return await this.empresasService.findAll();
  }

  @Patch('obra/:id/status')
  async atualizarStatusObra(
    @Param('id') id: string,
    @Body() body: { concluida: boolean }
  ) {
    return await this.empresasService.atualizarStatusObra(id, body.concluida);
  }
}
