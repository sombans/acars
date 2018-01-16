import { Injectable } from '@angular/core';
import { Cars } from '../components/model/cars';


@Injectable()
export class CarService {

  cars;
  constructor() {
    this.cars = [
      {
        id: '1',
        mark: 'fiat',
        model: 'ritmo',
        year: '1983',
        maxSpeed: '230',
        isAutomatic: 'no',
        engine: 'Benzin-gas',
        numberOfDoors: '5',
      },
      {
        id: '2',
        mark: 'VW',
        model: 'Jetta',
        year: '1987',
        maxSpeed: '200',
        isAutomatic: 'no',
        engine: 'Benzin-gas',
        numberOfDoors: '4',
      },
      {
        id: '3',
        mark: 'Citroen',
        model: 'C3',
        year: '2003',
        maxSpeed: '200',
        isAutomatic: 'no',
        engine: 'Deisel',
        numberOfDoors: '5',
      },
    ];
  }
  public getCars() {
    return this.cars;
  }
}
