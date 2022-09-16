import { Directive, HostListener } from '@angular/core';
import { ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomeStyle]'
})
export class CustomeStyleDirective {

  constructor(private obj:ElementRef) 
  {


    this.obj.nativeElement.style.background="yellow"
    this.obj.nativeElement.style.fontweight="Bold"
  
  }

}
