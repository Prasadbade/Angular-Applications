import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-batchlist',
  template: `
            <h2>Inside batchlist </h2>
            <ul *ngFor="let value of batches">
            <li>{{value.name}}</li>
            </ul>
            `
          })
export class BatchlistComponent implements OnInit {
  
  public batches=[{"name":"PPA","duration":4,"fees":12000},
  {"name":"LB","duration":3,"fees":15000},
  {"name":"PYTHON","duration":5,"fees":15000}
  ];
  constructor() { }

  ngOnInit(): void {
  }
  

}
