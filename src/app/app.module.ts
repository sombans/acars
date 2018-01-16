import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { CarsComponent } from './components/cars/cars.component';
import { CarService } from './service/car.service';


const appRoutes: Routes = [
  { path: 'cars', component: CarsComponent },
  
];
@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    CarsComponent,
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
