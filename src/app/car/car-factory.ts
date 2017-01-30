import { Car, Engine, Tires } from './car'

export class CarFactory {
    createCar() {
        let car = new Car(this.createEngine(), this.createTires())
        car.description = 'Factory car'
        return car
    }

    createEngine() {
        return new Engine()
    }

    createTires() {
        return new Tires()
    }
}
