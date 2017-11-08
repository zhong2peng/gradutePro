/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TieredMenuDnComponent } from './tiered-menu-dn.component';

describe('TieredMenuDnComponent', () => {
  let component: TieredMenuDnComponent;
  let fixture: ComponentFixture<TieredMenuDnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TieredMenuDnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TieredMenuDnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
