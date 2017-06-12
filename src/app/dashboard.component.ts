import { Component, OnInit } from '@angular/core'
import { Hero } from './hero'
import { Heroes } from './hero.service'

@Component({
    selector: 'my-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
    heroes: Hero[]

    constructor(private heroService: Heroes) { }

    ngOnInit() {
        this.heroService.getList()
            .then(heroes => this.heroes = heroes.slice(1, 5));
    }
 }