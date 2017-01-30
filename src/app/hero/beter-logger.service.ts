import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable()
export class BeterLoggerService extends LoggerService {

  constructor() { super() }

  log(message) {
    this.logs.push(message)
    console.log("Logging from beter logger service..." + message)
  }

}
