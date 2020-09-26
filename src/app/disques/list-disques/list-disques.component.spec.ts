import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDisquesComponent } from './list-disques.component';

describe('ListDisquesComponent', () => {
  let component: ListDisquesComponent;
  let fixture: ComponentFixture<ListDisquesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListDisquesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDisquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
