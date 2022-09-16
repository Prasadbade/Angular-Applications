import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mymulti'
})
export class MymultiPipe implements PipeTransform {

  transform(value:number, args: number): number {
    return value*args;
  }

}
