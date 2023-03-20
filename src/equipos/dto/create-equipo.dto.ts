export class CreateEquipoDto {
  readonly nombre_equipo: string;
  readonly pais_id: number;
  readonly departamento_id: number;
  readonly municipio_id: number;
  readonly area_id: number;
  readonly barrio_id: number;
  readonly uniforme_local: string;
  readonly uniforme_visitante: string;
  readonly tercera_equipacion: string;
  readonly logo: string;
}
