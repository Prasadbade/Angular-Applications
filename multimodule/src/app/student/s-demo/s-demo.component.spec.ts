import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SDemoComponent } from './s-demo.component';

describe('SDemoComponent', () => {
  let component: SDemoComponent;
  let fixture: ComponentFixture<SDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
