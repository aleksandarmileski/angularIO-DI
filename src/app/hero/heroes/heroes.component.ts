import { Component, OnInit } from '@angular/core';
import { heroServiceProvider } from '../hero-service-provider';

@Component({
  selector: 'di-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  providers: [heroServiceProvider]
})
export class HeroesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
