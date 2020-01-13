import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateStringDialogComponent } from './update-string-dialog.component';

describe('UpdateStringDialogComponent', () => {
  let component: UpdateStringDialogComponent;
  let fixture: ComponentFixture<UpdateStringDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateStringDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateStringDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
