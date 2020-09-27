import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PjSedComponent } from './pj-sed.component';

describe('PjSedComponent', () => {
  let component: PjSedComponent;
  let fixture: ComponentFixture<PjSedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PjSedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PjSedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
