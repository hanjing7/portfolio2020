import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PjBytonWebsiteComponent } from './pj-byton-website.component';

describe('PjBytonWebsiteComponent', () => {
  let component: PjBytonWebsiteComponent;
  let fixture: ComponentFixture<PjBytonWebsiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PjBytonWebsiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PjBytonWebsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
