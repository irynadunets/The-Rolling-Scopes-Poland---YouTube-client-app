import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBoxComponent } from './search-box.component';

describe('SearchBoxComponent', () => {
  let component: SearchBoxComponent;
  let fixture: ComponentFixture<SearchBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBoxComponent);
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
