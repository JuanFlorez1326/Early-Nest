import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { ok } from 'assert';
import { CarsService } from './cars.service';
@Controller('cars')
export class CarsController {

    constructor( private readonly carsService: CarsService) {}

    @Get()
    getAllCars() {
        return this.carsService.findAll()
    }

    @Get(':id')
    getById (@Param('id', ParseIntPipe ) id: number ) {
        console.log(id);
        return this.carsService.findOneById(id)
    }

    @Post()
    createCar(@Body() body: any ) {
        return body
    }

    @Patch(':id')
    updateCar(@Body() body: any ) {
        return body
    }

    @Delete(':id')
    deleteById (@Param('id', ParseIntPipe ) id: number ) {
        return id
    }  
}