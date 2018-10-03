import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SumUpTableComponent } from './sum-up-table.component';

describe('SumUpTableComponent', () => {
  let component: SumUpTableComponent;
  let fixture: ComponentFixture<SumUpTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SumUpTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SumUpTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
