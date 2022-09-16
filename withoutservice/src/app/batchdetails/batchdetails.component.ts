import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-batchdetails',
  template: `<h2>Inside batch details</h2>
          <ul *ngFor="let value of batches">
            <li>{{value.name}} with duration{{value.duration}} having fees{{value.fees}}</li>
          </ul>
            `})
export class BatchdetailsComponent implements OnInit {

public batches=[{"name":"PPA","duration":4,"fees":12000},
{"name":"LB","duration":3,"fees":15000},
{"name":"PYTHON","duration":5,"fees":15000}
];
  constructor() { }

  ngOnInit(): void {
  }



}
