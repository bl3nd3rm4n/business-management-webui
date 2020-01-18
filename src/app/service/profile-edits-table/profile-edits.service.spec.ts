import { TestBed } from '@angular/core/testing';

import { ProfileEditsService } from './profile-edits.service';

describe('ProfileEditsServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProfileEditsService = TestBed.get(ProfileEditsService);
    expect(service).toBeTruthy();
  });
});
