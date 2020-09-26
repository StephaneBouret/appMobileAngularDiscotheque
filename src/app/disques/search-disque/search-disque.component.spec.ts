import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchDisqueComponent } from './search-disque.component';

describe('SearchDisqueComponent', () => {
  let component: SearchDisqueComponent;
  let fixture: ComponentFixture<SearchDisqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchDisqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchDisqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
