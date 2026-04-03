import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ResponsaveisService } from './responsaveis.service';
import { CreateResponsavelDto } from './dto/create-responsavel.dto';
import { UpdateResponsavelDto } from './dto/update-responsavel.dto';

@Controller('responsaveis')
export class ResponsaveisController {
  constructor(private readonly responsaveisService: ResponsaveisService) {}

  @Post()
  create(@Body() createResponsavelDto: CreateResponsavelDto) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return this.responsaveisService.create(createResponsavelDto);
  }

  @Get()
  findAll() {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return this.responsaveisService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return this.responsaveisService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateResponsavelDto: UpdateResponsavelDto,
  ) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return this.responsaveisService.update(+id, updateResponsavelDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return this.responsaveisService.remove(+id);
  }
}
