/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OrgchartDnComponent } from './orgchart-dn.component';

describe('OrgchartDnComponent', () => {
  let component: OrgchartDnComponent;
  let fixture: ComponentFixture<OrgchartDnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrgchartDnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgchartDnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
