import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Que32Component } from './que32.component';

describe('Que32Component', () => {
  let component: Que32Component;
  let fixture: ComponentFixture<Que32Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Que32Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Que32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
