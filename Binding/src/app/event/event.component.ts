import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent 
{
  public str=""

  public Fun ()
{
  console.log("inside event handler")
}
public gun()
{
  this.str="button clicked"
}
public sun(data:any)
{
 console.log(data)
}
}
