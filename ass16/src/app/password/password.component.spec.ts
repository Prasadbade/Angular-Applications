import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckPass, PasswordComponent } from './password.component';

describe('CheckPass',()=>
{
  it('checking password validation',()=>
  {
    const ret=CheckPass("HEllo!1066");
    expect(ret).toBe(1);
  })
})
