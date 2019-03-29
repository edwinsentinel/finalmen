import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaccoPage } from './sacco.page';

describe('SaccoPage', () => {
  let component: SaccoPage;
  let fixture: ComponentFixture<SaccoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaccoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaccoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
