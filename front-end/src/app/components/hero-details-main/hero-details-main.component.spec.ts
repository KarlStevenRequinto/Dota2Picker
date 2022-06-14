import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroDetailsMainComponent } from './hero-details-main.component';

describe('HeroDetailsMainComponent', () => {
  let component: HeroDetailsMainComponent;
  let fixture: ComponentFixture<HeroDetailsMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroDetailsMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroDetailsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
