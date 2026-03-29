import { Controller, Get, Post, Body } from '@nestjs/common';
import { RegistrosService } from './registros.service';
import { CreateRegistroDto } from './dto/create-registro.dto';

@Controller('registros')
export class RegistrosController {
  constructor(private readonly registrosService: RegistrosService) {}

  @Post()
  create(@Body() createRegistroDto: CreateRegistroDto) {
    return this.registrosService.create(createRegistroDto);
  }

  @Get()
  findAll() {
    return this.registrosService.findAll();
  }
}
