import { TestBed } from '@angular/core/testing';

import { VerifyAuthGuardService } from './verify-auth-guard.service';

describe('VerifyAuthGuardService', () => {
  let service: VerifyAuthGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VerifyAuthGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
