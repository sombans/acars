import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { CarsComponent } from './components/cars/cars.component';
import { CarService } from './service/car.service';
import { CarFormComponent } from './components/car-form/car-form.component';


const appRoutes: Routes = [
  { path: 'cars', component: CarsComponent },
  { path: 'add', component: CarFormComponent },
  
];
@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    CarsComponent,
    CarFormComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    CarService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
