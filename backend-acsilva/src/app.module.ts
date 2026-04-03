import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RegistrosModule } from './registros/registros.module';
import { ResponsaveisModule } from './responsaveis/responsaveis.module';

@Module({
  imports: [RegistrosModule, ResponsaveisModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
