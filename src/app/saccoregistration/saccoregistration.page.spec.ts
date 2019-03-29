import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaccoregistrationPage } from './saccoregistration.page';

describe('SaccoregistrationPage', () => {
  let component: SaccoregistrationPage;
  let fixture: ComponentFixture<SaccoregistrationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaccoregistrationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaccoregistrationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
