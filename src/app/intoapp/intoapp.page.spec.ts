import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntoappPage } from './intoapp.page';

describe('IntoappPage', () => {
  let component: IntoappPage;
  let fixture: ComponentFixture<IntoappPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntoappPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntoappPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
