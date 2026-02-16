import { TestBed } from '@angular/core/testing';

import { Dummyservice } from './dummyservice';

describe('Dummyservice', () => {
  let service: Dummyservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Dummyservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
