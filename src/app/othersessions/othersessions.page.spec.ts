import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OthersessionsPage } from './othersessions.page';

describe('OthersessionsPage', () => {
  let component: OthersessionsPage;
  let fixture: ComponentFixture<OthersessionsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OthersessionsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OthersessionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
