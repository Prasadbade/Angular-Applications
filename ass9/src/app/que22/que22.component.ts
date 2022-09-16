import { Component, OnInit } from '@angular/core';
import { StringService } from '../string.service';

@Component({
  selector: 'app-que22',
  template:
  `
  <h2>count of capital letter in MarveLLous is {{count}}</h2>
  ` 
})
export class Que22Component implements OnInit {
  public count:number=0

  constructor(private _obj:StringService) { }

  ngOnInit(): void 
  {
    this.count=this._obj.countcapital("MarveLLous")
    
  }

}
