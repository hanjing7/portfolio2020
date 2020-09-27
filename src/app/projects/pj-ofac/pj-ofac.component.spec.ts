import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PjOfacComponent } from './pj-ofac.component';

describe('PjOfacComponent', () => {
  let component: PjOfacComponent;
  let fixture: ComponentFixture<PjOfacComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PjOfacComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PjOfacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
