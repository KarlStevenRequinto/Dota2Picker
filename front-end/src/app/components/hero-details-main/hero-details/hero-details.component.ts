import { Component, OnInit } from '@angular/core';
import { BusinessLogicService } from 'src/app/services/business-logic/business-logic.service';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.scss'],
})
export class HeroDetailsComponent implements OnInit {
  selectedHero: any = null;

  constructor(private busiLogic: BusinessLogicService) {}

  ngOnInit() {
    this.busiLogic.getHero().subscribe((heroObj) => {
      this.selectedHero = heroObj;
      // console.log('tama to pota');
      // console.log(heroObj);
    });
  }
}
