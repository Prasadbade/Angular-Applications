import { Directive } from '@angular/core';
import { ElementRef } from '@angular/core';
import { HostListener } from '@angular/core';
@Directive({
  selector: '[appCompSuccess]'
})
export class CompSuccessDirective {

  constructor(private obj:ElementRef) 
  {
    this.obj.nativeElement.style.background="yellow"
   }
  

  @HostListener('mouseenter')onmouseenter()
  {
    this.obj.nativeElement.style.color="green"
  }
  @HostListener('mouseleave')onmouseleave()
    {
      this.obj.nativeElement.style.color="black"      
    }

}
