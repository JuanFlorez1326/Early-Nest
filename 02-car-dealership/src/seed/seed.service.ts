import { Injectable } from '@nestjs/common';
import { CarsService } from '../cars/cars.service';
import { CARS_SEED } from './data/cars.seed';
import { BrandsService } from '../brands/brands.service';
import { BRANDS_SEED } from './data/brands.seed';


@Injectable()
export class SeedService {

  constructor(private readonly cardService: CarsService, private readonly brandsService: BrandsService) {}

  populateDB() {
    this.cardService.fillCarsWithData(CARS_SEED)
    this.brandsService.fillBrandsWithData(BRANDS_SEED)
  }
}
