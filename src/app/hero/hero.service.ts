import { Injectable } from '@angular/core';
import { HEROES } from './mock-heroes';
import { EvenBeterLoggerService } from './even-beter-logger.service';
import { BeterLoggerService } from './beter-logger.service';
import { LoggerService } from './logger.service';
import { silentLogger } from './logger.service';

@Injectable()
export class HeroService {

  constructor(
    private logger: LoggerService,
    private isAuthorized: boolean
  ) { }

  getHeroes() {
    let auth = this.isAuthorized ? 'authorized' : 'unauthorized'
    this.logger.log('Getting heroes for ${auth} user...')
    return HEROES.filter(hero => this.isAuthorized || !hero.isSecret
    )
  }

}
