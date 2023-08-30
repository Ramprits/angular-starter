/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { InternalErrorComponent } from './internal-error.component';

describe('InternalErrorComponent', () => {
  let component: InternalErrorComponent;
  let fixture: ComponentFixture<InternalErrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InternalErrorComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternalErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
