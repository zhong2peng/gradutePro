/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { InputmaskDnComponent } from './inputmask-dn.component';

describe('InputmaskDnComponent', () => {
  let component: InputmaskDnComponent;
  let fixture: ComponentFixture<InputmaskDnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputmaskDnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputmaskDnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
