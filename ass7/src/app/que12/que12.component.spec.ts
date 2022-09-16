import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Que12Component } from './que12.component';

describe('Que12Component', () => {
  let component: Que12Component;
  let fixture: ComponentFixture<Que12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Que12Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Que12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
