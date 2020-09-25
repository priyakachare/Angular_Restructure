import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeterDataComponent } from './meter-data.component';

describe('MeterDataComponent', () => {
  let component: MeterDataComponent;
  let fixture: ComponentFixture<MeterDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeterDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeterDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
