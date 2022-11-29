import { Controller, Get, Param } from '@nestjs/common';

@Controller('cars')
export class CarsController {

    private cars = ['Ford', 'Audi', 'BMW'];

    @Get()
    getAllCars() {
        return this.cars
    }

    @Get(':id')
    getById (@Param('id') id ) {
        console.log(id);
        return this.cars[id]
    }
}