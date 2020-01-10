import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockedUsersTableComponent } from './blocked-users-table.component';

describe('BlockedUsersTableComponent', () => {
  let component: BlockedUsersTableComponent;
  let fixture: ComponentFixture<BlockedUsersTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockedUsersTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockedUsersTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
