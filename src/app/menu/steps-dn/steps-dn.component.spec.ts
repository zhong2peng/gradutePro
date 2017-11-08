/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { StepsDnComponent } from './steps-dn.component';

describe('StepsDnComponent', () => {
  let component: StepsDnComponent;
  let fixture: ComponentFixture<StepsDnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepsDnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepsDnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
