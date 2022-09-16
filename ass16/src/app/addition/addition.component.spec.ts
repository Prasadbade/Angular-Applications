import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionComponent, ArrayAdition } from './addition.component';


describe('ArrayAddition',()=>
{
  it('addition of array element',()=>
  {
    const ret=ArrayAdition([10,20,30,40,50]);
    expect(ret).toBe(150);
  })
})