import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MethodPage } from './method.page';

describe('MethodPage', () => {
  let component: MethodPage;
  let fixture: ComponentFixture<MethodPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MethodPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MethodPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
