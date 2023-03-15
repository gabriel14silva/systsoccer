import { Injectable } from '@nestjs/common';

@Injectable()
export class EquiposService {
  private equipos = [
    {
      id: 1,
      nombre_equipo: 'URACCAN',
      pais_id: '1',
      departamento_id: '2',
      municipio_id: '3',
      area_id: '3',
      barrio_id: '4',
      uniforme_local: 'naranja y azul',
      uniforme_visitante: 'verde y rojo',
      tercera_equipacion: 'azul y amarillo',
      logo: 'Triangulo',
    },
    {
      id: 2,
      nombre_equipo: 'Barra Brava',
      pais_id: '1',
      departamento_id: '2',
      municipio_id: '3',
      area_id: '3',
      barrio_id: '4',
      uniforme_local: 'rojo y azul',
      uniforme_visitante: 'Blanco y verde',
      tercera_equipacion: 'Crema y Lila',
      logo: 'Cuadrado',
    },
    {
      id: 3,
      nombre_equipo: 'V-Cells',
      pais_id: '1',
      departamento_id: '2',
      municipio_id: '3',
      area_id: '3',
      barrio_id: '4',
      uniforme_local: 'blanco y azul',
      uniforme_visitante: 'Blanco y rosado',
      tercera_equipacion: 'Negro',
      logo: 'Circulo',
    },
  ];

  findAll() {
    return this.equipos;
  }

  findOneById(id: number) {
    const equipo = this.equipos.find((equipo) => equipo.id === id);

    return equipo;
  }
}
