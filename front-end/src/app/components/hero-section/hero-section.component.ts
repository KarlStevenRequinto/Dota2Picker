import { Component, OnInit } from '@angular/core';
import { MockBackEndService } from 'src/app/services/mock-back-end.service';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss'],
})
export class HeroSectionComponent implements OnInit {
  heroList: any = null;
  displayHero: any = [];
  selectedHeroObj: any = [];

  constructor(private mockApi: MockBackEndService) {}

  async ngOnInit() {
    this.heroList = await this.mockApi.getHeroList();

    console.log(this.displayHero);
  }

  selectHero(hero: any) {
    this.selectedHeroObj = [];
    this.selectedHeroObj.push(hero);
    console.log(this.selectedHeroObj);
  }
}
