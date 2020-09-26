import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfosDisqueComponent } from './infos-disque.component';

describe('InfosDisqueComponent', () => {
  let component: InfosDisqueComponent;
  let fixture: ComponentFixture<InfosDisqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfosDisqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfosDisqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
