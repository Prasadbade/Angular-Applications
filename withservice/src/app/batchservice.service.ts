import { Injectable } from '@angular/core';
import { IBatches } from './batches';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BatchserviceService 
{
private URL="./assets/Data/Batches.json"

constructor(private _obj:HttpClient) // dependency injection 
{}

  public getbatches():Observable<IBatches[]>
  {
    return this._obj.get<IBatches[]>(this.URL)

  }

}
