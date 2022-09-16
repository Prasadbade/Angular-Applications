import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BatchserviceService {

  constructor(private hobj:HttpClient) { }

  getbatches()
 {

  return this.hobj.get('/api/getBatches');
    
  }
  deletebatches(id:number)
 {
  var temp="/api/getBatches/"
  var temp2=id.toString()
  var path=temp.concat(temp2);
  return this.hobj.delete(path);
    
  }

  Insertbatches(data:any)
 {
  
  console.log("hello")
  console.log(data);
  return this.hobj.post('/api/batches',({name:data}));

    
  }
}
