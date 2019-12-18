import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationRequestsTableComponent } from './registration-requests-table.component';

describe('RegistrationRequestsTableComponent', () => {
  let component: RegistrationRequestsTableComponent;
  let fixture: ComponentFixture<RegistrationRequestsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrationRequestsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationRequestsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
