import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ADemoComponent } from './a-demo.component';

describe('ADemoComponent', () => {
  let component: ADemoComponent;
  let fixture: ComponentFixture<ADemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ADemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ADemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
