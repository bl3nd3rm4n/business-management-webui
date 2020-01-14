import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRegionDialogComponent } from './update-region-dialog.component';

describe('UpdateRegionDialogComponent', () => {
  let component: UpdateRegionDialogComponent;
  let fixture: ComponentFixture<UpdateRegionDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateRegionDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateRegionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
