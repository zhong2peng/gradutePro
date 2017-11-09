/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import {Header} from 'primeng/primeng';
import {Footer} from 'primeng/primeng';
import { DataGridDnComponent } from './data-grid-dn.component';

describe('DataGridDnComponent', () => {
  let component: DataGridDnComponent;
  let fixture: ComponentFixture<DataGridDnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataGridDnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataGridDnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
