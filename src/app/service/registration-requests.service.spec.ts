import { TestBed } from '@angular/core/testing';

import { RegistrationRequestsService } from './registration-requests.service';

describe('RegistrationRequestsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RegistrationRequestsService = TestBed.get(RegistrationRequestsService);
    expect(service).toBeTruthy();
  });
});
