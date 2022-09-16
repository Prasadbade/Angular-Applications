import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumberService {
  public ret:boolean=true

  constructor() { }
  public prime(num:number)
  {
    var i:number;
    for(i=2;i<=num-1;i++)
    {
      if(num%i==0)
      {
        this.ret=false
      }
    }
    return this.ret
  }
}
