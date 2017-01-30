import { Component, Inject } from '@angular/core';
import { Car } from './car/car';
import { CarFactory } from './car/car-factory';
import { Engine, Engine2 } from './car/car';
import { Tires, Tires2 } from './car/car';
import { APP_CONFIG, HERO_DI_CONFIG, AppConfig } from './app-config';

@Component({
  selector: 'di-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [Car,
    { provide: APP_CONFIG, useValue: HERO_DI_CONFIG }]
})
export class AppComponent {
  title = 'di works!';

  carData: string
  // engine: Engine = new Engine()
  // tires: Tires = new Tires()
  // car = new Car(this.engine, this.tires)
  // Simple car with 4 cylinders and Flintstone tires.
  // car = new Car(new Engine(), new Tires());
  public car: Car
  factoryCar = (new CarFactory).createCar();
  constructor( @Inject(APP_CONFIG) private config: AppConfig) {
    // this.car = new Car(
    //   new Engine2(12), 
    //   new Tires2('Bridgestone', 'Circle'))
    // this.title = this.car.drive()
    this.carData = this.factoryCar.drive()
    this.title = config.title + " " + config.apiEndpoint
  }
}
