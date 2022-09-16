import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-que1',
  templateUrl: './que1.component.html',
  styleUrls: ['./que1.component.css']
})
export class Que1Component 
{
  @Output() public myevent=new EventEmitter()
  public Message:any

  public sendmessage()
  
  {

    this.myevent.emit(this.Message)
  }
}
