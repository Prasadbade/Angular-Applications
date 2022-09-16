import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myMulti'
})
export class MyMultiPipe implements PipeTransform {

  transform(value: number, args: number): number {
    return value*args;
  }

}
