import { Component, OnInit,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent
{
  @Output() public myevent=new EventEmitter()
  public Message="hello parent"

  public sendmessage()
  {
    this.myevent.emit(this.Message)
  }
}
