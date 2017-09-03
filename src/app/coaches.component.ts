import { Component, OnInit } from '@angular/core';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'coaches',
  styleUrls: [ './coaches.component.css'],
  templateUrl: './coaches.component.html',
})
export class CoachesComponent implements OnInit {
   heroes: Hero[] = [];
   constructor(private heroService: HeroService) { }
   ngOnInit(): void {
     this.heroService.getHeroes()
     .then(heroes => this.heroes = heroes.slice(1,5));
   }
}