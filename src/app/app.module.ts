import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeroesComponent } from './hero/heroes/heroes.component';
import { HeroListComponent } from './hero/hero-list/hero-list.component';
import { HeroService } from './hero/hero.service';
import { silentLogger } from './hero/logger.service';
import { UserService } from './hero/user.service';
import { LoggerService } from './hero/logger.service';
import { BeterLoggerService } from './hero/beter-logger.service';
import { EvenBeterLoggerService } from './hero/even-beter-logger.service';
import { APP_CONFIG, HERO_DI_CONFIG } from './app-config';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    HeroService,
    UserService,
    { provide: LoggerService, useClass: LoggerService },
    // { provide: LoggerService, useValue: silentLogger },
    // { provide: BeterLoggerService, useExisting: LoggerService },
    { provide: BeterLoggerService, useClass: BeterLoggerService },
    { provide: EvenBeterLoggerService, useClass: EvenBeterLoggerService },
    { provide: APP_CONFIG, useValue: HERO_DI_CONFIG },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
