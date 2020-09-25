import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadingDatatableComponent } from './reading-datatable.component';

describe('ReadingDatatableComponent', () => {
  let component: ReadingDatatableComponent;
  let fixture: ComponentFixture<ReadingDatatableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadingDatatableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadingDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
