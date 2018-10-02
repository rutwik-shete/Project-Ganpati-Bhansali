import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WarganiCollectionComponent } from './wargani-collection.component';

describe('WarganiCollectionComponent', () => {
  let component: WarganiCollectionComponent;
  let fixture: ComponentFixture<WarganiCollectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WarganiCollectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WarganiCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
