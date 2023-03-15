import { Controller, Get, Param } from '@nestjs/common';
import { EquiposService } from './equipos.service';

@Controller('equipos')
export class EquiposController {
  constructor(private readonly equiposService: EquiposService) {}

  @Get()
  getAllEquipos() {
    return this.equiposService.findAll();
  }

  @Get(':id')
  getCarById(@Param('id') id: string) {
    console.log({ id: +id });
    return this.equiposService.findOneById(+id);
  }
}
