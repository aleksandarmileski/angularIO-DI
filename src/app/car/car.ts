import { Injectable } from '@angular/core';

export class Engine {
    public cylinders = 4
}
export class Engine2 {
    constructor(public cylinders: number) { }
}
export class Tires {
    public make = 'Flinstone'
    public model = 'Square'
}
export class Tires2 {
    constructor(public make: string, public model: string) { }
}

@Injectable()
export class Car {

    // ---------
    // public engine: Engine
    // public tires: Tires
    // description: string = 'No DI'

    // constructor() {
    //     this.engine = new Engine()
    //     this.tires = new Tires()
    // }
    // ---------

    description: string = 'DI'

    constructor(public engine: Engine, public tires: Tires) {
    }
    // constructor(private engine: Engine2, private tires: Tires2) {
    // }

    drive() {
        return `
            ${this.description} car with
            ${this.engine.cylinders} cylinders and 
            ${this.tires.make} tires(${this.tires.model} model).
        `
    }

}
