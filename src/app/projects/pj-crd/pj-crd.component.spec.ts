import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PjCrdComponent } from './pj-crd.component';

describe('PjCrdComponent', () => {
  let component: PjCrdComponent;
  let fixture: ComponentFixture<PjCrdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PjCrdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PjCrdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
