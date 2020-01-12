import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelsDropdownComponent } from './levels-dropdown.component';

describe('LevelsDropdownComponent', () => {
  let component: LevelsDropdownComponent;
  let fixture: ComponentFixture<LevelsDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LevelsDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LevelsDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
