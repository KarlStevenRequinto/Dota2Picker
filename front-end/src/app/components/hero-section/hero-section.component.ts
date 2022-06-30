import { Component, OnInit } from '@angular/core';
import { BusinessLogicService } from 'src/app/services/business-logic/business-logic.service';
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

  constructor(
    private mockApi: MockBackEndService,
    private busiLogic: BusinessLogicService
  ) {}

  async ngOnInit() {
    this.heroList = await this.mockApi.getHeroList();
  }

  selectHero(hero: any) {
    this.selectedHeroObj = [];

    // this.selectedHeroObj.push(hero);
    // console.log(this.selectedHeroObj);
    // this.busiLogic.heroObj = this.selectedHeroObj;
    console.log(this.busiLogic.heroObj);
    this.busiLogic.setHero(hero);
  }
}
