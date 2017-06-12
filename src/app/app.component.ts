import { Component } from '@angular/core'

@Component({
    selector: 'app-root',
    template: `
    <h1>
        Welcome to {{title}}!!
    </h1>
    <nav>
        <a routerLink="/dashboard">Dashboard</a>
        <a routerLink="/heroes">Heroes</a>
    </nav>
    <router-outlet></router-outlet>
    `,
    styleUrls: ["app.style.css"]
})
export class AppComponent {

    title = 'A Trend Chart';

}