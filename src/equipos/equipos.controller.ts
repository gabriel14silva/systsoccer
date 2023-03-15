import { Controller, Get, Param } from '@nestjs/common';

@Controller('equipos')
export class EquiposController {
  private equipos = ['URACCAN', 'Barra Brava', 'V-Cells'];
  @Get()
  getAllEquipos() {
    return this.equipos;
  }

  @Get(':id')
  getCarById(@Param('id') id: string) {
    console.log({ id });
    return this.equipos[id];
  }
}
