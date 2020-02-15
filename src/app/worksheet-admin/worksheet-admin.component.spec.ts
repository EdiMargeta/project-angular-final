import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorksheetAdminComponent } from './worksheet-admin.component';

describe('WorksheetAdminComponent', () => {
  let component: WorksheetAdminComponent;
  let fixture: ComponentFixture<WorksheetAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorksheetAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorksheetAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
