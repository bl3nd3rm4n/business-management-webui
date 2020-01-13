import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateConsultingLevelDialogComponent } from './update-consulting-level-dialog.component';

describe('UpdateConsultingLevelDialogComponent', () => {
  let component: UpdateConsultingLevelDialogComponent;
  let fixture: ComponentFixture<UpdateConsultingLevelDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateConsultingLevelDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateConsultingLevelDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
