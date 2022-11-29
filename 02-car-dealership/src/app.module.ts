import { Module } from '@nestjs/common';
import { CarsModule } from './cars/cars.module';
import { CarsService } from './cars/cars.service';

@Module({
  imports: [CarsModule],
  controllers: [],
  providers: [],
  exports: []
})
export class AppModule {}