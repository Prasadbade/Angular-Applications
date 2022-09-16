import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Que31Component } from './que31.component';

describe('Que31Component', () => {
  let component: Que31Component;
  let fixture: ComponentFixture<Que31Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Que31Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Que31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
