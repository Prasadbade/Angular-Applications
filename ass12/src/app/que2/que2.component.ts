import { Component, OnInit } from '@angular/core';
import { MyaddPipe } from '../myadd.pipe';
import { MymultiPipe } from '../mymulti.pipe';
@Component({
  selector: 'app-que2',
  templateUrl: './que2.component.html',
  styleUrls: ['./que2.component.css']
})
export class Que2Component implements OnInit {
 public no1:number=0;
 public no2:number=0;
  constructor() { }

  ngOnInit(): void 
  {
    this.no1=10
    this.no2=20
  }

}
