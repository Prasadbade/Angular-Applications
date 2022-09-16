import { Component, OnInit } from '@angular/core';
import { ArithmeticService } from '../arithmetic.service';

@Component({
  selector: 'app-que1',
  template:
  `
      <h2>In question 1</h2>
      <h2> addition of 30 and 40 is {{addition}}</h2>
      <h2> subtraction of 30 and 40 is {{subtraction}}</h2>
  `
})
export class Que1Component implements OnInit {
public addition:any
public subtraction:any
  constructor(private _obj:ArithmeticService) 
  { }

  ngOnInit(): void 
  {
    this.addition=this._obj.add(30,40)
    this.subtraction=this._obj.sub(30,40)

  }

}
