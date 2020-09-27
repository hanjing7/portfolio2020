import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PjBrokercheckComponent } from './pj-brokercheck.component';

describe('PjBrokercheckComponent', () => {
  let component: PjBrokercheckComponent;
  let fixture: ComponentFixture<PjBrokercheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PjBrokercheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PjBrokercheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
