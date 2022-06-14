import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PickSuggestionComponent } from './pick-suggestion.component';

describe('PickSuggestionComponent', () => {
  let component: PickSuggestionComponent;
  let fixture: ComponentFixture<PickSuggestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PickSuggestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PickSuggestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
