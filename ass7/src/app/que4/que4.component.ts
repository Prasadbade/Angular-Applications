import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-que4',
  templateUrl: './que4.component.html',
  styleUrls: ['./que4.component.css']
})
export class Que4Component
{
  public str:string="marvellous infosystem"
  public upper()
  {
    this.str=this.str.toUpperCase()
  }
  public lower()
  {
    this.str=this.str.toLowerCase()
  }



}
