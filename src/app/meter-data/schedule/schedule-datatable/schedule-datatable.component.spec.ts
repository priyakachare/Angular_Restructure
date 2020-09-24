import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleDatatableComponent } from './schedule-datatable.component';

describe('ScheduleDatatableComponent', () => {
  let component: ScheduleDatatableComponent;
  let fixture: ComponentFixture<ScheduleDatatableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleDatatableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
