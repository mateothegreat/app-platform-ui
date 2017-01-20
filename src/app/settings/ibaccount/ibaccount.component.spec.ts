/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { IbaccountComponent } from './ibaccount.component';

describe('IbaccountComponent', () => {
  let component: IbaccountComponent;
  let fixture: ComponentFixture<IbaccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IbaccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IbaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
