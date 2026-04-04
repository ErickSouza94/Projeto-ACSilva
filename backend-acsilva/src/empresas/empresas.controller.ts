import { Controller, Get, Post, Body } from '@nestjs/common';
import { EmpresasService } from './empresas.service';

@Controller('empresas')
export class EmpresasController {
  constructor(private readonly empresasService: EmpresasService) {}

  // Esta é a rota que o seu Admin usa!
  @Post('completo')
  async create(
    @Body() body: { nome: string; obraNome: string; responsavel: string },
  ) {
    return this.empresasService.criarCompleto(body);
  }

  @Get()
  findAll() {
    return this.empresasService.findAll();
  }

  // Se você não for usar os métodos abaixo agora, pode removê-los ou comentá-los
  // para o erro desaparecer.
}
