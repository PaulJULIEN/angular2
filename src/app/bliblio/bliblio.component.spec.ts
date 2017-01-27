/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BliblioComponent } from './bliblio.component';

describe('BliblioComponent', () => {
  let component: BliblioComponent;
  let fixture: ComponentFixture<BliblioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BliblioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BliblioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
