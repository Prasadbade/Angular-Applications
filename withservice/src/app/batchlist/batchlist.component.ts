import { Component, OnInit } from '@angular/core';
import { BatchserviceService } from '../batchservice.service';

@Component({
  selector: 'app-batchlist',
  template:
  `

        <h2> inside batchlist</h2>
        <ul *ngFor="let values of batches">
        <li> {{values.names}}</li>
        </ul>

  `
})
export class BatchlistComponent implements OnInit {

  public batches:any=[];
  
  constructor(private _obj:BatchserviceService) // dependency injection
  { 
    
  }

  ngOnInit(): void 
  {
    this.batches=this._obj.getbatches().subscribe(data=>this.batches=data);
  }

}
