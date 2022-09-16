import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'que3'
})
export class Que3Pipe implements PipeTransform {

  public str:string=""
  transform(value: number, args: string): string 
  {
    if(args=="prime")
    {
      var count=0;
      for(var i=2;i<value/2;i++)
      {
        if(value%i==0)
        {
          count++;
        }
      }
      if(count>0)
      {
      this.str="number is not prime"
      }
      else
      {
        this.str="number is prime"
      }
    }



    if(args=="even")
    {
      if(value%2==0)
      {
        this.str="number is even"
      }
      else
      {
        this.str="number is not even"
      }
    }



    if(args=="odd")
    {
      if(value%2!=0)
      {
        this.str="number is odd"
      }
      else
      {
        this.str="number is not odd"
      }
    }
    
    return this.str;
  }

}
