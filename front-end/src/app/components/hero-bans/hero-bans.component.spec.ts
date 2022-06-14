import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroBansComponent } from './hero-bans.component';

describe('HeroBansComponent', () => {
  let component: HeroBansComponent;
  let fixture: ComponentFixture<HeroBansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroBansComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroBansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
