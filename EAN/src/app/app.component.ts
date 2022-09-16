import { Component,OnInit } from '@angular/core';
import { BatchserviceService } from './batchservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'client';
  public batch:any;
  public data:any;
  public name:any
  constructor(private sobj:BatchserviceService){}

  ngOnInit()
  {

  }
  

  GetbatchesAPI()
  {
    this.sobj.getbatches().subscribe((Response)=>
    {console.log("data from server:",Response);
    this.batch=Response;

  });
  }

  deletebatchesAPI()
  {
    this.sobj.deletebatches(this.data).subscribe((Response)=>
    {console.log("data deleted from server:",Response);
    this.batch=Response;
    });
  }

  InsertbatchesAPI()
  {
    
    this.sobj.Insertbatches(this.name).subscribe((Response)=>
    {console.log("data inserted into server:",Response);
    this.batch=Response;
    
    });
  }
}

