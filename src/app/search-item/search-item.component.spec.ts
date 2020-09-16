import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchItemComponent } from './search-item.component';

describe('SearchItemComponent', () => {
  let component: SearchItemComponent;
  let fixture: ComponentFixture<SearchItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchItemComponent);
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
