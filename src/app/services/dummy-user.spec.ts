import { TestBed } from '@angular/core/testing';

import { DummyUser } from './dummy-user';

describe('DummyUser', () => {
  let service: DummyUser;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DummyUser);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
