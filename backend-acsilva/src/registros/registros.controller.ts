import { Controller, Get, Post, Body, Delete, Param } from '@nestjs/common';
import { RegistrosService } from './registros.service';
import { CreateRegistroDto } from './dto/create-registro.dto';

@Controller('registros')
export class RegistrosController {
  constructor(private readonly registrosService: RegistrosService) {}

  @Post()
  create(@Body() createRegistroDto: CreateRegistroDto) {
    return this.registrosService.create(createRegistroDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.registrosService.remove(id);
  }

  @Get()
  findAll() {
    return this.registrosService.findAll();
  }
}
