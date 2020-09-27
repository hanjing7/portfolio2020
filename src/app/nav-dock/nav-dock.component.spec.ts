import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavDockComponent } from './nav-dock.component';

describe('NavDockComponent', () => {
  let component: NavDockComponent;
  let fixture: ComponentFixture<NavDockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavDockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavDockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
