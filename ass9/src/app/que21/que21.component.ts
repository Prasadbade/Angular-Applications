import { Component, OnInit } from '@angular/core';
import { NumberService } from '../number.service';

@Component({
  selector: 'app-que21',
  template:
  `

  <ng-template #pass>
    <h1>
        the number is prime
    </h1>
  </ng-template>

  <ng-template #fail>
    <h1>
        the number is not prime
    </h1>
  </ng-template>

   <h2 *ngIf="check; then pass; else fail"></h2>


  `
})
export class Que21Component implements OnInit {
  public check:boolean=false
  constructor(private _obj:NumberService) 
  { }

  ngOnInit(): void 
  {
   this.check=this._obj.prime(14)   
  }

}
