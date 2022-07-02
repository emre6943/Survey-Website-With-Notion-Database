import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperimentC1Component } from './experiment-c1.component';

describe('ExperimentC1Component', () => {
  let component: ExperimentC1Component;
  let fixture: ComponentFixture<ExperimentC1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperimentC1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperimentC1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
