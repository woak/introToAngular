import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { Heroes } from './hero.service'
import { HeroDetailComponent } from './hero-detail.component'
import { HeroesComponent } from './heroes.component'
import { AppComponent } from './app.component'
import { RouterModule } from '@angular/router'
import { DashboardComponent } from './dashboard.component'
import { AppRoutingModule } from './app-routing.module'
import { HttpModule } from '@angular/http'
import { InMemoryWebApiModule } from 'angular-in-memory-web-api'
import { InMemoryDataService } from './in-memory-data.service'
import { TrendChartComponent } from './../charts/trend-chart.component'

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent,
    TrendChartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  providers: [
    Heroes
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
