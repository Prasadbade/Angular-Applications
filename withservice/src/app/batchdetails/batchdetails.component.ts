import { Component, OnInit } from '@angular/core';
import { BatchserviceService } from '../batchservice.service';

@Component({
  selector: 'app-batchdetails',
  template:
   `
      <h2> inside batchdetails</h2>
      <ul *ngFor="let values of batches">
      <li>{{values.names}} has duration {{values.duration}} with fee{{values.fees}}</li>
      </ul>
      
    `
})
export class BatchdetailsComponent implements OnInit {

  public batches:any=[];
  
  constructor(private _obj:BatchserviceService) // dependency injection
  { 
    
  }

  ngOnInit(): void 
  {
    this.batches=this._obj.getbatches().subscribe(data=>this.batches=data);
  }


}
