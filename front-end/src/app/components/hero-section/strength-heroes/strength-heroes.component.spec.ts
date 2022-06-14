import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrengthHeroesComponent } from './strength-heroes.component';

describe('StrengthHeroesComponent', () => {
  let component: StrengthHeroesComponent;
  let fixture: ComponentFixture<StrengthHeroesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StrengthHeroesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StrengthHeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
