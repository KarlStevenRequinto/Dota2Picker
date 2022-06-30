import { Component, OnInit } from '@angular/core';
import { BusinessLogicService } from 'src/app/services/business-logic/business-logic.service';

@Component({
  selector: 'app-hero-picks',
  templateUrl: './hero-picks.component.html',
  styleUrls: ['./hero-picks.component.scss'],
})
export class HeroPicksComponent implements OnInit {
  teamPicks: Array<{}> = [];
  enemyPicks: Array<{}> = [];

  constructor(private busiLogic: BusinessLogicService) {}

  ngOnInit(): void {}
}
