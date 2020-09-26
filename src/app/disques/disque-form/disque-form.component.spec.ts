import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisqueFormComponent } from './disque-form.component';

describe('DisqueFormComponent', () => {
  let component: DisqueFormComponent;
  let fixture: ComponentFixture<DisqueFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisqueFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisqueFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
