import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PjFinproGatewayComponent } from './pj-finpro-gateway.component';

describe('PjFinproGatewayComponent', () => {
  let component: PjFinproGatewayComponent;
  let fixture: ComponentFixture<PjFinproGatewayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PjFinproGatewayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PjFinproGatewayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
