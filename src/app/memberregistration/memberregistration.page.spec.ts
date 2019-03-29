import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberregistrationPage } from './memberregistration.page';

describe('MemberregistrationPage', () => {
  let component: MemberregistrationPage;
  let fixture: ComponentFixture<MemberregistrationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberregistrationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberregistrationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
