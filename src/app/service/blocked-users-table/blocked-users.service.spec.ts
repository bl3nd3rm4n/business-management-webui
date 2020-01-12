import { TestBed } from '@angular/core/testing';

import { BlockedUsersTableService } from './blocked-users.service';

describe('BlockedUsersTableService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BlockedUsersTableService = TestBed.get(BlockedUsersTableService);
    expect(service).toBeTruthy();
  });
});
