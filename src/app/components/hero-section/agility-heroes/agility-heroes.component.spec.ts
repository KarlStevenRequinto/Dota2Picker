import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgilityHeroesComponent } from './agility-heroes.component';

describe('AgilityHeroesComponent', () => {
  let component: AgilityHeroesComponent;
  let fixture: ComponentFixture<AgilityHeroesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgilityHeroesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgilityHeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
