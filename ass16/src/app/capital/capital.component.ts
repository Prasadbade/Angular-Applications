import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-capital'
})
export class CapitalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  
}
export function CountCapital(data:string)
{
  var capital = (data.match(/[A-Z]/g)||[]).length;
  return capital;

}