import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addition'
})
export class AdditionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
export function ArrayAdition(data:number[])
{
  var addition=0;
  for(let index = 0; index < data.length; index++) 
  {
    addition=addition+data[index];
  }
  return addition;
}
