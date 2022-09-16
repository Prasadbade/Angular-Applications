import { Directive } from '@angular/core';
import { ElementRef } from '@angular/core';
import { HostListener } from '@angular/core';
@Directive({
  selector: '[appCompFailure]'
})
export class CompFailureDirective {

  constructor(private obj:ElementRef) 
  {
    this.obj.nativeElement.style.background="yellow"
   }
  

  @HostListener('mouseenter')onmouseenter()
  {
    this.obj.nativeElement.style.color="red"
  }
  @HostListener('mouseleave')onmouseleave()
    {
      this.obj.nativeElement.style.color="black"      
    }


}
