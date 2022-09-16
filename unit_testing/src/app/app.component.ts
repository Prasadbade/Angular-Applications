import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'unit_testing';
  no=1;

  Increament()
  {
    this.no++;
  }
  Decrement()
  {
    this.no--;
  }
}
