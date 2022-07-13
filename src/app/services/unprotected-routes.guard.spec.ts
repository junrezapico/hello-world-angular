import { TestBed } from '@angular/core/testing';

import { UnprotectedRoutesGuard } from './unprotected-routes.guard';

describe('UnprotectedRoutesGuard', () => {
  let guard: UnprotectedRoutesGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UnprotectedRoutesGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
