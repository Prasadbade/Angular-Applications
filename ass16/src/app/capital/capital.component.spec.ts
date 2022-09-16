import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapitalComponent, CountCapital } from './capital.component';

describe('CountCapital',()=>
{
  it('count of upppercase letter',()=>
  {
    const ret=CountCapital("HellO");
    expect(ret).toBe(2);
  })
})
