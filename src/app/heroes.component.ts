import { Component } from '@angular/core';
import { Heroes } from './hero.service'
import { OnInit } from '@angular/core'
import { Hero } from './hero'
import { HeroDetailComponent } from './hero-detail.component'
import { Router } from '@angular/router'

@Component({
  selector: 'my-heroes',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class HeroesComponent implements OnInit {

  constructor(
    private heroesService: Heroes,
    private router: Router)
  {

  }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes() {
    this.heroesService.getList().then(heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }

  gotoDetail(): void 
  {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

  heroes: Hero[]
  selectedHero: Hero;
}
