import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  public temp:string=""
  transform(value:string): string 
  {
    var j=0
    for(var i=(value.length-1);i>=0;)
    {
      this.temp=this.temp.concat(value[i])
      i--;
    }
    return this.temp
    }

}
