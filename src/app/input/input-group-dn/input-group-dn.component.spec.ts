/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { InputGroupDnComponent } from './input-group-dn.component';

describe('InputGroupDnComponent', () => {
  let component: InputGroupDnComponent;
  let fixture: ComponentFixture<InputGroupDnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputGroupDnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputGroupDnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
