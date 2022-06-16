import { TestBed } from '@angular/core/testing';

import { MockBackEndService } from './mock-back-end.service';

describe('MockBackEndService', () => {
  let service: MockBackEndService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockBackEndService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
