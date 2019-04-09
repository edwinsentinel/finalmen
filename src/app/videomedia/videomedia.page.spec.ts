import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideomediaPage } from './videomedia.page';

describe('VideomediaPage', () => {
  let component: VideomediaPage;
  let fixture: ComponentFixture<VideomediaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideomediaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideomediaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
