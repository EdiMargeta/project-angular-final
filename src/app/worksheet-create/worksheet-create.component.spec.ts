import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorksheetCreateComponent } from './worksheet-create.component';

describe('WorksheetCreateComponent', () => {
  let component: WorksheetCreateComponent;
  let fixture: ComponentFixture<WorksheetCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorksheetCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorksheetCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
