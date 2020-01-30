import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupervisedEmployeesTableComponent } from './supervised-employees-table.component';

describe('SupervisedEmployeesTableComponent', () => {
  let component: SupervisedEmployeesTableComponent;
  let fixture: ComponentFixture<SupervisedEmployeesTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupervisedEmployeesTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupervisedEmployeesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
