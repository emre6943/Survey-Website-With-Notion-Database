import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperimentC2Component } from './experiment-c2.component';

describe('ExperimentC2Component', () => {
  let component: ExperimentC2Component;
  let fixture: ComponentFixture<ExperimentC2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperimentC2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperimentC2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
