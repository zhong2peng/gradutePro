/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PaiginatorDnComponent } from './paiginator-dn.component';

describe('PaiginatorDnComponent', () => {
  let component: PaiginatorDnComponent;
  let fixture: ComponentFixture<PaiginatorDnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaiginatorDnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaiginatorDnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
