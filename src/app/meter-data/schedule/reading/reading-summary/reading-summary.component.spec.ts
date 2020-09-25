import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadingSummaryComponent } from './reading-summary.component';

describe('ReadingSummaryComponent', () => {
  let component: ReadingSummaryComponent;
  let fixture: ComponentFixture<ReadingSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadingSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadingSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
