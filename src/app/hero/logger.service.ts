import { Injectable } from '@angular/core';

export let silentLogger = {
  logs: ['Silent logger says "Shhhhh!". Provided via "useValue"'],
  log: () => { }
}

@Injectable()
export class LoggerService {

  logs: string[] = []

  constructor() { }

  log(message) {
    this.logs.push(message)
    console.log("Logging from logger service...", message)
  }

}
