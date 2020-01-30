import { TestBed } from '@angular/core/testing';

import { SupervisedEmployeesService } from './supervised-employees.service';

describe('SupervisedEmployeesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SupervisedEmployeesService = TestBed.get(SupervisedEmployeesService);
    expect(service).toBeTruthy();
  });
});
