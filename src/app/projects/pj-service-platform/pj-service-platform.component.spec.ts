import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PjServicePlatformComponent } from './pj-service-platform.component';

describe('PjServicePlatformComponent', () => {
  let component: PjServicePlatformComponent;
  let fixture: ComponentFixture<PjServicePlatformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PjServicePlatformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PjServicePlatformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
