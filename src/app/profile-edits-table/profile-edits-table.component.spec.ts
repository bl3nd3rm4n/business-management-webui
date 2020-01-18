import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileEditsTableComponent } from './profile-edits-table.component';

describe('ProfileEditsTableComponent', () => {
  let component: ProfileEditsTableComponent;
  let fixture: ComponentFixture<ProfileEditsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileEditsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileEditsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
