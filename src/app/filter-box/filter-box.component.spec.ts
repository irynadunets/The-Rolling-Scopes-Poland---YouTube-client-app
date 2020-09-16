import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterBoxComponent } from './filter-box.component';

describe('FilterBoxComponent', () => {
  let component: FilterBoxComponent;
  let fixture: ComponentFixture<FilterBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

<<<<<<< HEAD
=======
  it('should create', () => {
    expect(component).toBeTruthy();
  });
>>>>>>> 0dbff1f1fecb5a12d64b60f454a929e383e2bef3
});
