import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Que22Component } from './que22.component';

describe('Que22Component', () => {
  let component: Que22Component;
  let fixture: ComponentFixture<Que22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Que22Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Que22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
