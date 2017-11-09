/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TreetableDnComponent } from './treetable-dn.component';

describe('TreetableDnComponent', () => {
  let component: TreetableDnComponent;
  let fixture: ComponentFixture<TreetableDnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreetableDnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreetableDnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
