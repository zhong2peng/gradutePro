/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { InputSwitchDnComponent } from './input-switch-dn.component';

describe('InputSwitchDnComponent', () => {
  let component: InputSwitchDnComponent;
  let fixture: ComponentFixture<InputSwitchDnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputSwitchDnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputSwitchDnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
