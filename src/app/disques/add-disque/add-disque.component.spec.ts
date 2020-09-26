import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDisqueComponent } from './add-disque.component';

describe('AddDisqueComponent', () => {
  let component: AddDisqueComponent;
  let fixture: ComponentFixture<AddDisqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDisqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDisqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
