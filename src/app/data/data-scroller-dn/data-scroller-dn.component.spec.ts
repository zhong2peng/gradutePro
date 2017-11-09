/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DataScrollerDnComponent } from './data-scroller-dn.component';

describe('DataScrollerDnComponent', () => {
  let component: DataScrollerDnComponent;
  let fixture: ComponentFixture<DataScrollerDnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataScrollerDnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataScrollerDnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
