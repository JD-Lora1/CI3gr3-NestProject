import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car';
import {v4 as uuid} from 'uuid';
import { CreateCarDTO } from './dtos/create-car.dto';

@Injectable()
export class CarsService {
    cars: Car[]=[
    {
        id: uuid(),
        model: 'Fiesta',
        brand: 'Ford',
        year: 2002,
    },
    {
        id: uuid(),
        model: 'Focus',
        brand: 'Ford',
        year: 2010,
    },
    {
        id: uuid(),
        model: 'Civic',
        brand: 'Honda',
        year: 2001,
    }
    ]

    findAll(): Car[] {
        return this.cars;
    }

    getById(id: string): Car{
        const car = this.cars.find(car => car.id === id);
        if (car === undefined){
            throw new NotFoundException(`Car with id ${id} not found`);
        }
        return car
    }

    create(car: CreateCarDTO): Car{
        const newCar: Car = {id: uuid(), ... car}
        this.cars.push(newCar);
        return newCar;

    }

    update(id: string, car: Car): Car{
        // const index = this.car,findIndex(car => car.id ==id);
        // this.cars[index] = car;
        const carUpdate = this.getById(id);
        Object.assign(carUpdate, car)
    
        return carUpdate
    }

    delete(id: string): void{
        this.cars.filter(car => car.id !== id);
    }
}

