import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDisqueComponent } from './edit-disque.component';

describe('EditDisqueComponent', () => {
  let component: EditDisqueComponent;
  let fixture: ComponentFixture<EditDisqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDisqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDisqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
