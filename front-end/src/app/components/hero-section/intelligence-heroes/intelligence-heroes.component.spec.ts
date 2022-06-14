import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntelligenceHeroesComponent } from './intelligence-heroes.component';

describe('IntelligenceHeroesComponent', () => {
  let component: IntelligenceHeroesComponent;
  let fixture: ComponentFixture<IntelligenceHeroesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntelligenceHeroesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntelligenceHeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
