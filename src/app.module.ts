import { Module } from '@nestjs/common';
import { EquiposModule } from './equipos/equipos.module';

@Module({
  imports: [EquiposModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
