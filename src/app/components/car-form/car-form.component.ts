import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Cars } from '../model/cars';
import { CarService } from '../../service/car.service';


@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.css']
})
export class CarFormComponent implements OnInit {
  CarService: any;
  years;
  private cars = [];
  public newCar = new Cars();

  constructor(private _carService: CarService) {
    this.cars = this._carService.getCars();

    this.years = [1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999,
      2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009,
      2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018];
  }

  submitCar(cars: Cars) {
    this.newCar = new Cars();
  }
  // submitCar(cars: Cars) {

  //   this.CarService.newCar(Cars);

  // }

  // edit(cars: Cars) {
  //   this.newCars = Object.assign({}, cars);
  // }
  ngOnInit() {
  }

}
