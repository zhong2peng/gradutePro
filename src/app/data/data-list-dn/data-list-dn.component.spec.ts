/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DataListDnComponent } from './data-list-dn.component';

describe('DataListDnComponent', () => {
  let component: DataListDnComponent;
  let fixture: ComponentFixture<DataListDnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataListDnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataListDnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
