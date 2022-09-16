import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringService {

  constructor() { }

  public countcapital(str:string)
  {
    var count:number=0
    for (var i = 0; i < str.length; i++)
        {
          if (str[i] >= "A" && str[i] <= "Z") 
          count++;
        }
        return count
  }
}
