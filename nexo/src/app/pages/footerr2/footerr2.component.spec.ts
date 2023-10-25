/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Footerr2Component } from './footerr2.component';

describe('Footerr2Component', () => {
  let component: Footerr2Component;
  let fixture: ComponentFixture<Footerr2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Footerr2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Footerr2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
