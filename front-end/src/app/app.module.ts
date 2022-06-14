import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavLogoComponent } from './components/nav-logo/nav-logo.component';
import { HeroPicksComponent } from './components/hero-picks/hero-picks.component';
import { HeroBansComponent } from './components/hero-bans/hero-bans.component';
import { StrengthHeroesComponent } from './components/hero-section/strength-heroes/strength-heroes.component';
import { AgilityHeroesComponent } from './components/hero-section/agility-heroes/agility-heroes.component';
import { IntelligenceHeroesComponent } from './components/hero-section/intelligence-heroes/intelligence-heroes.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { HeroDetailsMainComponent } from './components/hero-details-main/hero-details-main.component';
import { HeroDetailsComponent } from './components/hero-details-main/hero-details/hero-details.component';
import { PickSuggestionComponent } from './components/hero-details-main/pick-suggestion/pick-suggestion.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    NavLogoComponent,
    HeroPicksComponent,
    HeroBansComponent,
    StrengthHeroesComponent,
    AgilityHeroesComponent,
    IntelligenceHeroesComponent,
    HeroSectionComponent,
    HeroDetailsMainComponent,
    HeroDetailsComponent,
    PickSuggestionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
