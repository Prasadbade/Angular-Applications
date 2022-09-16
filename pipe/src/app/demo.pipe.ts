import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'demo'
})
export class DemoPipe implements PipeTransform {

  
//   <h1>{{"Marvellous pune"|demo:"PPA":"python":"Angular"}}</h1>
  
transform(value: unknown, ...args: unknown[]): unknown 
  {

    var str:string=""
    if(args[0]=="PPA")
    str=args[0]+" "+"batches start from 9 july in "+value

    return str;

  }

}
