import { Component, OnInit } from '@angular/core';
import { CarService } from '../../service/car.service';


@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  cars = [];

  constructor(private _carsService: CarService) {
    this.cars = this._carsService.getCars();
  }

  ngOnInit() {
  }

}
