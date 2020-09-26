import { TestBed } from '@angular/core/testing';

import { DisquesService } from './disques.service';

describe('DisquesService', () => {
  let service: DisquesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DisquesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
