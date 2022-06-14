import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroPicksComponent } from './hero-picks.component';

describe('HeroPicksComponent', () => {
  let component: HeroPicksComponent;
  let fixture: ComponentFixture<HeroPicksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroPicksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroPicksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
