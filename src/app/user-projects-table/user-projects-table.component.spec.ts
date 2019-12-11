import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProjectsTableComponent } from './user-projects-table.component';

describe('UserProjectsTableComponent', () => {
  let component: UserProjectsTableComponent;
  let fixture: ComponentFixture<UserProjectsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserProjectsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProjectsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
