import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Que21Component } from './que21.component';

describe('Que21Component', () => {
  let component: Que21Component;
  let fixture: ComponentFixture<Que21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Que21Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Que21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
