import { Component, OnInit } from '@angular/core';
import { Cars } from '../model/cars';

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.css']
})
export class CarFormComponent implements OnInit {
  onSubmit: any;

  private newCars: Cars= new Cars();

  constructor() {
  }

  submitCars(cars: Cars) {
    this.onSubmit.emit(cars);
    this.newCars = new cars();
  }

  edit(cars: Cars) {
    this.newCars = Object.assign({}, cars);
  }

}
