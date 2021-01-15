import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBorderColor]'
})
export class BorderColorDirective {

  constructor(private el: ElementRef) { 
    // console.log('appBorderColor', this.el)
    el.nativeElement.style.border = '1px solid red';
  }

}
