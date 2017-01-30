import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';
import { UserService } from './user.service';

@Injectable()
export class EvenBeterLoggerService extends LoggerService {

  constructor(private userService: UserService) { super() }

  log(message: string) {
    let name = this.userService.user.name
    super.log(`Message to ${name}: ${message}`)
  }

}
