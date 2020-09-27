import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PjFundAnalyzerComponent } from './pj-fund-analyzer.component';

describe('PjFundAnalyzerComponent', () => {
  let component: PjFundAnalyzerComponent;
  let fixture: ComponentFixture<PjFundAnalyzerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PjFundAnalyzerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PjFundAnalyzerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
