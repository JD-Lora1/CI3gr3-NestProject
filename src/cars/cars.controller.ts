import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService : CarsService){
    
  }

  @Get()
  findAll() {
    return this.carsService.findAll();
  }

  @Post()
  @UsePipes(ValidationPipe)
  create(@Body() body: any) {
    return this.carsService.create(body);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.carsService.getById(id);
  }

  @Patch(':id')
  update(@Param('id', ParseUUIDPipe) id: string, @Body() body:any){
    return this.carsService.update(id, body);
  }

  // @Patch(':id')
  // update(@Param('id', ParseUUIDPipe) id: string, @Body() car: CreateCarDto){
  //   return this.carsService.update(id, body);
  // }

  @Delete(':id')
  delete(@Param('id', ParseUUIDPipe) id: string) {
    return this.carsService.delete(id);
  }
  
}
