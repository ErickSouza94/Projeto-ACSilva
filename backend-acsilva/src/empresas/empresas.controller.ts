import { Controller, Get, Post, Body } from '@nestjs/common';
import { EmpresasService } from './empresas.service';
import { CreateEmpresaDto } from './dto/create-empresa.dto'; // Importe o DTO aqui

@Controller('empresas')
export class EmpresasController {
  constructor(private readonly empresasService: EmpresasService) {}

  // Rota que o PainelAdmin do React utiliza
  @Post('completo')
  async create(@Body() createEmpresaDto: CreateEmpresaDto) {
    return this.empresasService.criarCompleto(createEmpresaDto);
  }

  @Get()
  findAll() {
    return this.empresasService.findAll();
  }
}
