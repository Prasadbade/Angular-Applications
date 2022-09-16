import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'marvellousChk'
})
export class MarvellousChkPipe implements PipeTransform {

  transform(value: number, args: string): boolean {
    if(args=="Prime")
    {
      for(var i = 2; i < value; i++)
      {
        if(value % i == 0)
        {
            return false;
        }
      }
    }
    else if(args=="Perfect")
    {
      var count=0;
      for(var i=1; i<value; i++)
        {
          if(value%i==0)
          {
      	  count=count+i;
          }
        }
      if(count!=value)
      {
        return false;
      } 
    }
    else if(args=="Even")
    {
      if(value%2!=0)
      {
        return false;
      } 
    }
    else if(args=="Odd")
    {
      if(value%2==0)
      {
        return false;
      } 
    }
    return true;
  }

}
