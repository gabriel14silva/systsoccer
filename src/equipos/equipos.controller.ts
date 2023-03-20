import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { EquiposService } from './equipos.service';

@Controller('equipos')
export class EquiposController {
  constructor(private readonly equiposService: EquiposService) {}

  @Get()
  getAllEquipos() {
    return this.equiposService.findAll();
  }

  @Get(':id')
  getCarById(@Param('id', ParseIntPipe) id: number) {
    console.log({ id });
    return this.equiposService.findOneById(id);
  }

  @Post()
  createEquipo(@Body() body: any) {
    return body;
  }

  @Patch(':id')
  updateEquipo(@Param('id', ParseIntPipe) id: number, @Body() body: any) {
    return body;
  }

  @Delete(':id')
  deleteEquipo(@Param('id', ParseIntPipe) id: number) {
    return {
      method: 'delete',
      id,
    };
  }
}
